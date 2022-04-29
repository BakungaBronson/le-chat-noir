import React from 'react';
import '../index.css';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

export class AcceptWager extends React.Component {
    constructor(props) {
        super(props);
        this.setClicked = this.setClicked.bind(this);
    }
    setClicked(e) {
        this.props.handleClick();
    }
    render() {
        return (
            <section className='intro'>
                <div className='row'>
                    <h1>Le Chat Noir</h1>
                    <img src="https://www.lifepng.com/wp-content/uploads/2020/11/Le-Chat-Noir-png-hd.png" width="200px" />
                    </div>
                    <div className='row'>
                    <br/>
                    <h1>You will win 1 ALGO for each time you beat the cat.</h1>
                    <h1>If you lose, the cat will take 1 ALGO from your wallet.</h1>
                    <button onClick={this.setClicked}>Accept</button>
                </div>
            </section>
        )
    }
}