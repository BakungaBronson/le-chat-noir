import React from 'react';
import { Circle } from './Circle';
import { GameOver } from './GameOver';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';
const reach = loadStdlib(process.env);

// Functiont to return an array of booleans with 4-10 replaced with true
const gameState = function() {
    let arr = Array(81).fill(false);
    for(let i = 0; i < Math.floor(Math.random() * (10-4) + 4); i++) {
        let index = 0;
        do{
            index = Math.floor(Math.random()*81);
        }while(arr[index] ===  true || index === 40);
        arr[index] = true;
    }
    return arr
}();

const outcome = ["Player Wins", "Cat Wins"];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '1', standardUnit};

class Player extends React.Component{
    // getPosition: Fun([], UInt),
    // seeOutcome: Fun([UInt], Null),
    // informTimeout: Fun([], Null),
    // updateBoard: Fun([UInt], gameBoard),
    getPosition(){
        // Return new position
    }
    seeOutcome(index){
        // Output outcome
    }
    informTimeout(){
        // Show timeout page to both users
    }
    updateBoard(newPosition){
        // Return array of 81 bools
    }
}

class Deloyer extends Player {
    constructor(props){
        super(props);
    }
    // getNode: Fun([gameBoard], UInt),
    // initGameBoard: Fun([], gameBoard),
    // gameCheck: Fun([gameBoard], Bool),
    getNode(board){
        // Return the new position for the cat
    }
    initGameBoard(){
        // Return a new game board
    }
    gameCheck(board){
        // Return a boolean if the game is over
    }
}

class Attacher extends Player {
    constructor(props){
        super(props);
        this.state = {
            view: "Start"
        }
    }
    async acceptWager(amount){
        const wager = reach.formatCurrency(amount, 4);
        return await new Promise(resolvedPromise => {
            this.setState({view: "AcceptWaher", wager, resolvedPromise});
        })
    }
    termsAccepted(){
        this.state.reolveAccepted
    }
}

export class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat_position: 40,
            circles_clicked: gameState,
            game_over: false,
            winner: ""
        }
        this.update_status = this.update_status.bind(this);
        this.check = this.check.bind(this);
        this.final_check = this.final_check.bind(this);
        this.random_movement = this.random_movement.bind(this);
    }
    update_status(index){
        // Make a copy of the circles_clicked array and replace the clicked element with true
        let arr = [...this.state.circles_clicked.slice(0, index), true, ...this.state.circles_clicked.slice(index + 1, this.state.circles_clicked.length)]

        // Update the state with the new array
        this.setState({
            circles_clicked: arr
        }, () => {
            this.check();
        });
  
    }
    random_movement(e){
        if(this.state.game_over !== true){

            this.setState((state) => {

                let movement_array = [];
                switch (state.cat_position){
                    // Case1: Cat is in the corners (3 positions) + Exit points
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

                    // Case2: Cat is at the left most column (5 positions) + Exit points
                    case 9:
                    case 18:
                    case 27:
                    case 36:
                    case 45:
                    case 54:
                    case 63:
                        movement_array = [(82 - state.cat_position)];
                        break;
                    
                    // Case3: Cat is at the right most column (5 positions) + Exit points
                    case 17:
                    case 26:
                    case 35:
                    case 44:
                    case 53:
                    case 62:
                    case 71:
                        movement_array = [(84 - state.cat_position)];
                        break;
                    
                    // Case4: Cat is at the top most column (5 positions) + Exit points
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        movement_array = [(83 - state.cat_position)];
                        break;

                    // Case5: Cat is at the bottom most column (5 positions) + Exit points
                    case 73:
                    case 74:
                    case 75:
                    case 76:
                    case 77:
                    case 78:
                    case 79:
                        movement_array = [(81 - state.cat_position)];
                        break;
                    
                    // Case6: Cat is away from the edge of the grid (8 positions) 
                    default:
                        movement_array = [10, 9, 8, 1, -1, -10, -9, -8];
                }

                // console.log(movement_array);

                let new_position = 0;
                do{

                    let step = movement_array[Math.floor(Math.random() * movement_array.length)];
                    // console.log("Step: ", step);
                    new_position = state.cat_position + step;
                    // console.log("New position: ", new_position);

                }while(new_position < 0 || new_position > 84 || this.state.circles_clicked[new_position] === true);

                // console.log("Outer new position: ", new_position);
                
                return {cat_position: new_position}

            }, () => {
                // console.log("New state: ", this.state.cat_position);
                this.final_check();
            })
        }
    }
    final_check(e){
        if(
            // Check the bottom of the cat
            this.state.circles_clicked[this.state.cat_position + 10] === true && 
            this.state.circles_clicked[this.state.cat_position + 9] === true &&
            this.state.circles_clicked[this.state.cat_position + 8] === true &&

            this.state.circles_clicked[this.state.cat_position - 10] === true &&
            this.state.circles_clicked[this.state.cat_position - 9] === true &&
            this.state.circles_clicked[this.state.cat_position - 8] === true &&

            this.state.circles_clicked[this.state.cat_position + 1] === true &&
            this.state.circles_clicked[this.state.cat_position - 1] === true
        ) {
            // console.log("Game over");
            this.setState({
                game_over: true,
                winner: "Player"
            });
        }else if (
            this.state.cat_position === 81 ||
            this.state.cat_position === 82 ||
            this.state.cat_position === 83 ||
            this.state.cat_position === 84
        ){
            // console.log("You lose");
            this.setState({
                game_over: true,
                winner: "Cat"
            });
        }
        else {
            // console.log("Not yet done");
        }
    }
    check(e){
        if(
            // Check the bottom of the cat
            this.state.circles_clicked[this.state.cat_position + 10] === true && 
            this.state.circles_clicked[this.state.cat_position + 9] === true &&
            this.state.circles_clicked[this.state.cat_position + 8] === true &&

            this.state.circles_clicked[this.state.cat_position - 10] === true &&
            this.state.circles_clicked[this.state.cat_position - 9] === true &&
            this.state.circles_clicked[this.state.cat_position - 8] === true &&

            this.state.circles_clicked[this.state.cat_position + 1] === true &&
            this.state.circles_clicked[this.state.cat_position - 1] === true
        ) {
            // console.log("Game over");
            this.setState({
                game_over: true,
            }, () => {
                this.random_movement();
            });
        }else if (
            this.state.cat_position === 81 ||
            this.state.cat_position === 82 ||
            this.state.cat_position === 83 ||
            this.state.cat_position === 84
        ){
            // console.log("You lose");
            this.setState({
                game_over: true,
            }, () => {
                this.random_movement();
            });
        }
        else {
            // console.log("Not yet done");
            this.random_movement();
        }
    }
    render() {
        const arr = Array(81).fill();

        return (
            // this.state.game_over? <GameOver winner={this.state.winner} /> :
            // <>
            // <section className='circle-pad'>
            //     {arr.fill().map((item, index) => {
            //         return <Circle key={index} cat_position={this.state.cat_position} update_status={this.update_status} index={index} clicked={this.state.circles_clicked[index]} />
            //     })}
            // </section></>
            renderView(this, <><section className='circle-pad'>
            {arr.fill().map((item, index) => {
                return <Circle key={index} cat_position={this.state.cat_position} update_status={this.update_status} index={index} clicked={this.state.circles_clicked[index]} />
            })}
        </section></>)
        )
    }
}