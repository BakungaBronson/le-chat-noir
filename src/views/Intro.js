import React from 'react';
import '../index.css';

export class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.setClicked = this.setClicked.bind(this);
    }
    setClicked(view) {
        this.props.handleClick(view);
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
                    <button onClick={this.setClicked}>Start</button>
                </div>
            </section>
        )
    }
}