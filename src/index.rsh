'reach 0.1';

const Player = {
  getPosition: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
}

const Cat = {
  // Function that gets the next node using breadth first search and returns a new position
  findNode: Fun([UInt], UInt),
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
  
  init();
  
  Alice.only(() => {
    // Generate random position to move first, since the cat starts at the center
    // It will always be 40
    const position = 40;
  });

  // The first one to publish deploys the contract
  Alice.publish(position);
  commit();

  // The second one to publish always attaches
  Bob.publish();
  commit();

  // write your program here
  exit();
});
