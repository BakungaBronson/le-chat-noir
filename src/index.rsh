'reach 0.1';

const Player = {
  getPosition: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
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
    wager: UInt,
    deadline: UInt,
  });

  // Bob will be the other player 
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  
  init();

  // const informTimeout = () => {
  //   each([Alice, Bob], () => {
  //     interact.informTimeout();
  //   })
  // }
  
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
