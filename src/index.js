import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { renderView, renderDOM } from "./views/render";
import { Circle } from "./views/Circle";
import { Intro } from "./views/Intro";
import { GameOver } from "./views/GameOver";
import { Timeout } from "./views/Timeout";
import { loadStdlib } from "@reach-sh/stdlib";
import { AcceptWager } from "./views/AcceptWager";
import { Wait } from "./views/Wait";
import * as backend from "./build/index.main.mjs";
const reach = loadStdlib(process.env);

const outcome = ["Player Wins", "Cat Wins"];
const { standardUnit } = reach;
const defaults = { defaultFundAmt: "10", defaultWager: "1", standardUnit };

class Player extends React.Component {
  // getPosition: Fun([], UInt),
  // seeOutcome: Fun([UInt], Null),
  // informTimeout: Fun([], Null),
  // updateBoard: Fun([UInt], gameBoard),
  async seeOutcome(winner) {
    // Output outcome
    await this.setState({ winner: winner[outcome] });
  }
  async informTimeout() {
    // Show timeout page to both users
    await this.setState({ timeout: true });
  }
  async updateBoard(arr) {
    // Update the state with the new array
    await this.setState({ circles_clicked: arr});

  }
}

// Both the Deployer and Attacher components were combined for this example into the Landing component
class Deloyer extends Player {
  constructor(props) {
    super(props);
  }
  // getNode: Fun([gameBoard], UInt),
  // initGameBoard: Fun([], gameBoard),
  // gameCheck: Fun([gameBoard], Bool),
}

class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {
      view: "Start",
    };
  }
  async acceptWager(amount) {
    const wager = reach.formatCurrency(amount, 4);
    this.setState({ accepted: 1 });
  }
  getPosition(index) {
    // Return new position
    return index;
  }
}

// This has both the functions of the Deployer and the Attacher
export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      accepted: 0,
      cat_position: 40,
      circles_clicked: Array(81).fill(false),
      game_over: false,
      winner: "",
      wait: 0,
      timeout: false,
    };
    this.startHandleClick = this.startHandleClick.bind(this);
    this.acceptHandleClick = this.acceptHandleClick.bind(this);
  }
  async componentDidMount() {
    // Alice's account
    // This would be an account from a mnemonic
    const acc = await reach.newTestAccount(1000000000);
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, bal });

    // The code below would work if we needed to have a funding page

    // try {
    //   const faucet = await reach.getFaucet();
    //   await reach.transfer(faucet, acc, reach.parseCurrency(10));
    // } catch (e) {
    //   console.log("Cannot Fund Account");
    // }
 
    const ctc = acc.contract(backend);
    this.wager = reach.parseCurrency(1); // UInt
    this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    console.log("ctcInfoStr:", ctcInfoStr);

    // Bob's account
    const acc1 = await reach.newTestAccount(1000000000);
    console.log(acc1);
    const balAtomic1 = await reach.balanceOf(acc1);
    const bal1 = reach.formatCurrency(balAtomic1, 4);
    const ctc1 = acc1.contract(backend, JSON.parse(ctcInfoStr));
    backend.Bob(ctc1, this);
    await this.setState({acc, bal});
  }
  async seeOutcome(winner) {
    // Output outcome

    // Array of outcomes
    const outcome = ["Player Wins", "Cat Wins"];
    const parsed_winner = parseInt(winner._hex, 16);
    console.log(parsed_winner);
    await this.setState({ winner: outcome[parsed_winner] });
  }
  async updateBoard(arr) {
    // Set the state of the board (circles_clicked) array on the frontend
    this.setState({ circles_clicked: arr });
  }
  async updateCatPosition(position) {
    // Update the state of the cat_posistion
    // We use parseInt with base 16 because the backend returns HEXADECIMAL
    console.log("New Cat position: ",parseInt(position._hex, 16));
    await this.setState({ cat_position: parseInt(position._hex, 16)});
    await this.setState({wait: 0});
  }
  log(something){
    // Logging function: This send data from the contract to the frontend
    // This would be the only logging function you need
    console.log(something);
  }
  logInfo(phrase) {
    // This function logs a value of type UInt
    console.log(phrase);
  }
  logBoard(board) {
    // This function logs a value of type gameBoard(defined in backend)
    console.log(board);
  }
  async acceptWager(amount) {
    // Since the wager is set, there is no need to show the wager page
    const wager = reach.formatCurrency(amount, 4);
    this.setState({ accepted: 1 });
  }
  async getPosition() {
    // Return a promise and set the resolve function to state
    // When clicked value is returned as opposed to a value being returned immediately
    const position = await new Promise(resolvePosition => {
      this.setState({resolvePosition});
    });
    await this.setState({resolvePosition: false});
    await this.setState({wait: 1});
    return position;
  }
  
  initGameBoard() {
    // Return a new game board
    this.setState({wait: 1});
    // Function to return an array of booleans with 4-10 replaced with true

    const gameState = (function () {
      let arr = Array(81).fill(false);
      for (let i = 0; i < Math.floor(Math.random() * (10 - 4) + 4); i++) {
        let index = 0;
        do {
          index = Math.floor(Math.random() * 81);
        } while (arr[index] === true || index === 40);
        arr[index] = true;
      }
      return arr;
    })();
    this.setState({ circles_clicked: gameState });
    return gameState;
  }
  async getNode(board, cat_position) {
    await this.setState({wait: 1});
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

    // console.log(movement_array);

    let new_position = 0;
    do {
      let step = movement_array[Math.floor(Math.random() * movement_array.length)];
      // console.log("Step: ", step);
      new_position = parsed_cat_position + step;
      // console.log("New position: ", new_position);
    } while (
      new_position < 0 ||
      new_position > 84 ||
      board[new_position] === true
    );

    console.log("Outer new position: ", new_position);

    return new_position;
  }
  async informTimeout() {
    // Show timeout page to both users
    console.log("Time out");
    this.setState({ timeout: true });
  }
  startHandleClick(e) {
    this.setState({
      start: 1,
    });
  }
  acceptHandleClick(propsGot) {
    this.setState({
      accepted: 1,
      propsGot,
    });
    console.log("Working");
  }
  render() {
    return this.state.start ? (
      this.state.accepted ? (
        this.state.timeout? (
         <Timeout /> 
        ):this.state.winner? (
          <GameOver parent={this}/>
        ): this.state.wait || !this.state.resolvePosition? (
          <Wait />
        ):
        <Start parent={this} otherProps={this.state.propsGot} />
      ) : (
        <AcceptWager ctcInfoStr={this.ctcInfoStr} handleClick={this.acceptHandleClick} />
      )
    ) : (
      <Intro handleClick={this.startHandleClick} />
    );
  }
}

export class Start extends React.Component {
  constructor(props){
    super(props);
    this.playPosition = this.playPosition.bind(this);
  }
  playPosition(index){
    this.props.parent.setState({wait: 1})
    this.props.parent.state.resolvePosition(index);
  }
  render() {
    const arr = Array(81).fill();
    return (
      <>
        <section className="circle-pad">
          {arr.fill().map((item, index) => {
            return (
              <Circle
                key={index}
                cat_position={this.props.parent.state.cat_position}
                getPosition={this.playPosition}
                index={index}
                clicked={this.props.parent.state.circles_clicked[index]}
              />
            );
          })}
        </section>
      </>
    );
  }
}

ReactDOM.render(<Landing />, document.getElementById("root"));
