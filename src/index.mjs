import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

// Representing the game state
let cat_position = 40;
let board = Array(81).fill(false);

// Function to print the board to the console
const showBoard = (arr) => {
  console.log();
  for (let i = 0; i < 9; i++) {
    // Holds the contents of a single line
    let line = "";
    for (let j = 0; j < 9; j++) {
      if (j % 9 === true) {
        break;
      } else {
        // This shows the postiion of the tile infront of the tile for example 0:
        let placeHolder = "";

        // Check if the position is less than 10
        if (i * 9 + j < 10) {
          // We add a space to the beginning of the placeholder to make the output look neat
          placeHolder = ` ${i * 9 + j}:`;
        } else {
          placeHolder = `${i * 9 + j}:`;
        }

        if (i * 9 + j === cat_position) {
          // Add a cat emoji
          line += placeHolder + "🐱 ";
        } else {
          if (arr[i * 9 + j] === true) {
            // Add a blocked emoji
            line += placeHolder + "❌ ";
          } else {
            // Add a free space emoji
            line += placeHolder + "🔵 ";
          }
        }
      }
    }
    console.log(line);
  }
  console.log();
};

const Player = (who) => ({
  seeOutcome: (winner) => {
    // Array of outcomes
    const outcome = ["Player Wins", "Cat Wins"];
    const parsed_winner = parseInt(winner._hex, 16);
    console.log(outcome[parsed_winner]);
  },
  informTimeout: () => {
    console.log(`${who} took too long to play`);
  },
  log: (info) => {
    console.log(info);
  },
});

await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...Player("Alice"),
    // implement Alice's interact object here
    
    // getNode: Fun([gameBoard, cat_move], UInt),
    getNode: (board, cat_position) => {
      console.log("Cat making a move...");
      // We parse the cat position we get from the backend to convert it to decimal
      const parsed_cat_position = parseInt(cat_position._hex, 16);
      // Return the new position for the cat
      let movement_array = [];
      switch (parsed_cat_position) {
        // Case1: Cat is in the corners
        case 0:
          movement_array = [83, 82];
          break;
        case 8:
          movement_array = [75, 76];
          break;
        case 72:
          movement_array = [9, 10];
          break;
        case 80:
          movement_array = [1, 4];
          break;

        // Case2: Cat is at the left most column
        case 9:
        case 18:
        case 27:
        case 36:
        case 45:
        case 54:
        case 63:
          movement_array = [82 - parsed_cat_position];
          break;

        // Case3: Cat is at the right most column
        case 17:
        case 26:
        case 35:
        case 44:
        case 53:
        case 62:
        case 71:
          movement_array = [84 - parsed_cat_position];
          break;

        // Case4: Cat is at the top most column
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          movement_array = [83 - parsed_cat_position];
          break;

        // Case5: Cat is at the bottom most column
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
          movement_array = [81 - parsed_cat_position];
          break;

        // Case6: Cat is away from the edge of the grid (8 positions)
        default:
          movement_array = [10, 9, 8, 1, -1, -10, -9, -8];
      }

      let new_position = 0;
      do {
        let step =
          movement_array[Math.floor(Math.random() * movement_array.length)];
        new_position = parsed_cat_position + step;
      } while (
        new_position < 0 ||
        new_position > 84 ||
        board[new_position] === true
      );

      return new_position;
    },

    // updateCatPosition: Fun([UInt], Null),
    updateCatPosition: (newPosition) => {
      cat_position = parseInt(newPosition._hex, 16);
      console.log("New Cat position: ", cat_position);
      // Print the board to the screen
      showBoard(board);
    },

    // initGameBoard: Fun([], gameBoard),
    initGameBoard: () => {
      const gameState = (function () {
        let arr = Array(81).fill(false);
        // Block a random number of tiles between 10 and 4
        for (let i = 0; i < Math.floor(Math.random() * (10 - 4) + 4); i++) {
          let index = 0;
          do {
            index = Math.floor(Math.random() * 81);
          } while (arr[index] === true || index === 40);
          arr[index] = true;
        }
        return arr;
      })();
      board = gameState;
      console.log("### Initialised Board ###\n");
      // Print the board to the screen
      showBoard(board);
      return gameState;
    },
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...Player("Bob"),
    // implement Bob's interact object here

    // getPosition: Fun([], UInt),
    getPosition: async() => {
      let newPosition = 0;
        do{
          // Ask user to enter a position to block
          newPosition = await ask.ask('Enter a new position (0 - 80): ', parseInt);

        }while(board[newPosition] === true || cat_position === newPosition);

        console.log(`Bob moves to position: ${newPosition}`);
        return newPosition;
    },
    
    // acceptWager: Fun([UInt], Null),
    acceptWager: (wager) => {
      console.log(
        `Bob accepted the wager of ${stdlib.formatCurrency(parseInt(wager._hex, 16), 4)}`
      );
    },

    // updateBoard: Fun([gameBoard], Null),
    updateBoard: (gameBoard) => {
      board = gameBoard;
      // Print the board to the screen
      showBoard(board);
    },
  }),
]);
ask.done();
console.log("Goodbye, Alice and Bob!");
