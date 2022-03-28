'reach 0.1';

const Player = {
  getPosition: Fun([], UInt),
  seeOutcome: Fun([UInt], null),
}

const Cat = {
  // Function that gets the next node using breadth first search and returns a new position
  findNode: Fun([Object], UInt),
}

export const main = Reach.App(() => {
  // Alice will be the Cat in this case
  const Alice = Participant('Alice', {
    ...Player,
    ...Cat,
    deadline: UInt,
  });

  // Bob will be the other player 
  const Bob = Participant('Bob', {
    ...Player,
  });

  Alice.only(() => {
    // Generate random position to move first
    const position = null;
  });

  init();

  // The first one to publish deploys the contract
  Alice.publish(position);
  commit();

  // The second one to publish always attaches
  Bob.publish();
  commit();

  // write your program here
  exit();
});
