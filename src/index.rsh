"reach 0.1";

const gameBoard = Array(Bool, 81);
const cat_move = UInt;
const [isOutcome, PLAYER_WINS, CAT_WINS] = makeEnum(2);
const state = Object({ "0": gameBoard, "1": UInt });

// Checks

// Cat escaped check
// Check the position of the cat that it is not on one of the tiles on positions 81, 82, 83 or 84.
const catOffBoard = (cat_position) =>
  cat_position === 81 ||
  cat_position === 82 ||
  cat_position === 83 ||
  cat_position === 84;

// Cat trapped check
// Check all surrounding tiles to see if the cat is surrounded.
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

// Game over
// We know the game is over if the cat has escaped or the cat is trapped.
const gameCheck = (board, cat_position) =>
  catOffBoard(cat_position) || catTrapped(board, cat_position);

const Player = {
  // See the outcome
  seeOutcome: Fun([UInt], Null),
  // Inform timeout
  informTimeout: Fun([], Null),
  // Logging function
  log: Fun(true, Null),
};

export const main = Reach.App(() => {
  // Alice will be the Cat in this case
  const Alice = Participant("Alice", {
    ...Player,
    // Get cat move
    getNode: Fun([gameBoard, cat_move], UInt),
    // Update cat position on board
    updateCatPosition: Fun([UInt], Null),
    // Initialise the game board
    initGameBoard: Fun([], gameBoard),
  });

  // Bob will be the other player
  const Bob = Participant("Bob", {
    ...Player,
    // Get player move
    getPosition: Fun([], UInt),
    // Accept Wager
    acceptWager: Fun([UInt], Null),
    // Update game board with new player position
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
    
    /* We can also set the wager to make sure someone advanced 
      at the game doesn’t place a *high wager and take all the funds we have. */
    const wager = 1;

    // We also need to set the deadline
    const deadline = 10;

    // We know from the demo game that the cat always starts from the center
    const start_cat_position = 40;
  });

  Alice.publish(wager, deadline, start_cat_position, randomizedBoard).pay(
    wager
  );
  commit();
  
  Bob.only(() => {
    interact.acceptWager(wager);
  });

  // The second one to publish always attaches
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  var [board, cat_position] = [randomizedBoard, start_cat_position];
  
  invariant((balance() == 2 * wager));

  while (
    gameCheck(
      board,
      cat_position
    ) === false
  ) {
    commit();

    Alice.only(() => {
      const new_cat_position = declassify(
        interact
        .getNode(board, cat_position)
      );
      interact.updateCatPosition(new_cat_position);
    });
    Alice.publish(new_cat_position);
    commit();

    const updated_cat_position = new_cat_position;

    Bob.only(() => {
      const position = declassify(interact.getPosition());
      assume(position < 81);
    });
    Bob.publish(position);
    commit();
    
    Bob.only(() => {
      assume(position < 81);
      const newBoardState = board.set(position, true);
      interact.updateBoard(newBoardState);
    });
    Bob.publish(newBoardState);

    [board, cat_position] = [newBoardState, updated_cat_position];
    continue;
  }

  assert(
    gameCheck(
      board,
      cat_position
    ) === true
  );

  const [toAlice, toBob] = catOffBoard(cat_position)
    ? [2, 0]
    : [0, 2];

  transfer(toAlice * wager).to(Alice);
  transfer(toBob * wager).to(Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(
      catOffBoard(cat_position)? 1: 0
    );
  });

  exit();
});
