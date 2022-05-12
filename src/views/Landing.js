import React from 'react';
import '../index.css';
import { Start } from './Start';
import { Intro } from './Intro';
import { AcceptWager } from './AcceptWager';

export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            accepted: 0,
        }
        this.startHandleClick = this.startHandleClick.bind(this);
        this.acceptHandleClick = this.acceptHandleClick.bind(this);
    }
    startHandleClick(e) {
        this.setState({
            start: 1,
        })
    }
    acceptHandleClick(e) {
        this.setState({
            accepted: 1,
        })
        console.log("Working");
    }
    render() {
        return (
            this.state.start? this.state.accepted? <Start  /> : <AcceptWager handleClick={this.acceptHandleClick} /> : <Intro handleClick={this.startHandleClick} />
        )
    }
}