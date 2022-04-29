'reach 0.1';

const gameBoard = Array(Bool, 81);
const cat_move =UInt;
const [isOutcome, PLAYER_WINS, CAT_WINS] = makeEnum(2);
const state = Object({"0": gameBoard, "1": UInt});

const checkGameBoard = (board, index) => {
  assert((index < board.length) === true);
  return true;
}

const catOffBoard = (cat_position) => {
  return cat_position === 81 || cat_position === 82 || cat_position === 83 || cat_position === 84;
}

const catTrapped = (board, cat_position) => {
  if((cat_position > 9) && (cat_position < 71)){
    return board[cat_position + 10] === true && board[cat_position + 9] === true && board[cat_position + 8] === true && board[cat_position - 10] === true && board[cat_position - 9] === true && board[cat_position - 8] === true && board[cat_position + 1] === true && board[cat_position - 1] === true;
  }else {
    return false;
  }
}

const winner = (board, cat_position) => {
  if(catTrapped(board, cat_position)){
    return 0;
  }else{
    return 1;
  }
}

const gameCheck = (board, cat_position) => {
  if(winner(board, cat_position) === 1 || winner(board, cat_position) === 0) {
    return true;
  }else {
    return false;
  }
}


// assert(winner(gameBoard, cat_move) === CAT_WINS);
// assert(winner(gameBoard, cat_move) === CAT_WINS);
// assert(winner(gameBoard, cat_move) === CAT_WINS);
// assert(winner(gameBoard, cat_move) === CAT_WINS);

const Player = {
  getPosition: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  updateBoard: Fun([UInt], gameBoard),
}


export const main = Reach.App(() => {
  // Alice will be the Cat in this case
  const Alice = Participant('Alice', {
    ...Player,
    getNode: Fun([gameBoard], UInt),
    initGameBoard: Fun([], gameBoard),
    gameCheck: Fun([gameBoard], Bool),
  });

  // Bob will be the other player 
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    })
  }
  
  Alice.only(() => {
    // Generate random position to move first, since the cat starts at the center
    // It will always be 40
    const randomizedBoard = declassify(interact.initGameBoard());
    const wager = 1;
    const deadline = 10;
    const start_cat_position = 40;
  });

  Alice.publish(wager, deadline, start_cat_position,randomizedBoard).pay(wager);
  commit();

  Bob.only(() => {
    interact.acceptWager(wager); 
  })

  // The second one to publish always attaches
  Bob.pay(wager)
  .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  // Used single state variable since you can only have one var above a while loop
  var workingState = {"0": randomizedBoard, "1": start_cat_position};
  
  invariant(balance() == 2 * wager);
  
  while( gameCheck(workingState["0"], workingState["1"]) === false){
    commit();

    Bob.only(() => {
      const position = declassify(interact.getPosition());
    });
    Bob.publish(position);
    commit();

    const newBoardState = workingState["0"].set(position, true);

    const otherWorkingState = {...workingState, "0": newBoardState};

    Alice.only(() => {
      const new_cat_position = declassify(interact.getNode(randomizedBoard));
    });
    Alice.publish(new_cat_position);

    workingState = {...otherWorkingState, "1": new_cat_position};
    continue;
  }

  assert(gameCheck(workingState["0"], workingState["1"]) === true);

  const [toAlice, toBob] = (gameCheck(workingState["0"], workingState["1"])? [2, 0]: [0, 2]);

  transfer(toAlice * wager).to(Alice);
  transfer(toBob * wager).to(Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(winner(workingState["0"], workingState["1"]));
  })
  // write your program here
  exit();
});