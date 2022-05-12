"reach 0.1";

const gameBoard = Array(Bool, 81);
const cat_move = UInt;
const [isOutcome, PLAYER_WINS, CAT_WINS] = makeEnum(2);
const state = Object({ "0": gameBoard, "1": UInt });

const checkGameBoard = (board, index) => {
  assert(index < board.length === true);
  return true;
};

const catOffBoard = (cat_position) =>
  cat_position === 81 ||
  cat_position === 82 ||
  cat_position === 83 ||
  cat_position === 84;

const catTrapped = (board, cat_position) => {
  if((cat_position < 71) && (cat_position > 9)){

    const p0 = board[cat_position + 10];
    const p1 = board[cat_position + 9];
    const p2 = board[cat_position + 8];
    const p3 = board[cat_position - 10];
    const p4 = board[cat_position - 9];
    const p5 = board[cat_position - 8];
    const p6 = board[cat_position + 1];
    const p7 = board[cat_position - 1];
    return p0 && p1 && p2 && p3 && p4 && p5 && p6 && p7;
  }else{
    return false;
  }

};

const gameCheck = (board, cat_position) =>
  catOffBoard(cat_position) || catTrapped(board, cat_position);

// assert(winner(gameBoard, cat_move) === CAT_WINS);
// assert(winner(gameBoard, cat_move) === CAT_WINS);
// assert(winner(gameBoard, cat_move) === CAT_WINS);
// assert(winner(gameBoard, cat_move) === CAT_WINS);

const Player = {
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  log: Fun(true, Null),
  logInfo: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  // Alice will be the Cat in this case
  const Alice = Participant("Alice", {
    ...Player,
    log: Fun(true, Null),
    logBoard: Fun([gameBoard], Null),
    getNode: Fun([gameBoard, cat_move], UInt),
    updateCatPosition: Fun([UInt], Null),
    initGameBoard: Fun([], gameBoard),
  });

  // Bob will be the other player
  const Bob = Participant("Bob", {
    ...Player,
    getPosition: Fun([], UInt),
    acceptWager: Fun([UInt], Null),
    updateBoard: Fun([gameBoard], Null),
  });

  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    // Generate random position to move first, since the cat starts at the center
    // It will always be 40
    const randomizedBoard = declassify(interact.initGameBoard());
    const wager = 1;
    const deadline = 10;
    const start_cat_position = 40;
  });

  Alice.publish(wager, deadline, start_cat_position, randomizedBoard).pay(
    wager
  );
  commit();
  // Alice.interact.logBoard(randomizedBoard);
  
  Bob.only(() => {
    interact.acceptWager(wager);
  });

  // The second one to publish always attaches
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  // Alice.interact.log(winner(randomizedBoard, start_cat_position));


  // Used single state variable since you can only have one var above a while loop
  var workingState = {
    randomizedBoard: randomizedBoard,
    start_cat_position: start_cat_position,
  };
  
  invariant((balance() == 2 * wager));

  while (
    gameCheck(
      workingState["randomizedBoard"],
      workingState["start_cat_position"]
    ) === false
  ) {
    commit();

    Alice.only(() => {
      const new_cat_position = declassify(interact.getNode(workingState["randomizedBoard"], workingState["start_cat_position"]));
      interact.log(new_cat_position);
      interact.updateCatPosition(new_cat_position);
    });
    Alice.publish(new_cat_position);
    commit();
    Alice.interact.logInfo(129);

    const otherWorkingState = {
      ...workingState,
      start_cat_position: new_cat_position,
    };

    Bob.only(() => {
      const position = declassify(interact.getPosition());
      assume(position < 81);
    });
    Bob.publish(position);
    commit();
    
    Alice.interact.logInfo(128);
    Bob.only(() => {
      assume(position < 81);
      const newBoardState = otherWorkingState["randomizedBoard"].set(position, true);
      interact.updateBoard(newBoardState);
    });
    Bob.publish(newBoardState);

    workingState = {
      ...otherWorkingState,
      randomizedBoard: newBoardState,
    };
    continue;
  }

  Alice.interact.log(159);
  Alice.interact.log(gameCheck(
    workingState["randomizedBoard"],
    workingState["start_cat_position"]
  ));
  assert(
    gameCheck(
      workingState["randomizedBoard"],
      workingState["start_cat_position"]
    ) === true
  );

  const [toAlice, toBob] = catOffBoard(workingState["start_cat_position"])
    ? [2, 0]
    : [0, 2];

  transfer(toAlice * wager).to(Alice);
  transfer(toBob * wager).to(Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(
      catOffBoard(workingState["start_cat_position"])? 1: 0
    );
  });
  // write your program here
  exit();
});
