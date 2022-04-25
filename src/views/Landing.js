import React from 'react';
import '../index.css';
import { Start } from './Start';
import { Intro } from './Intro';

export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({
            start: 1,
        })
    }

    render() {
        return (
            this.state.start? <Intro /> : <Start />
        )
    }
}