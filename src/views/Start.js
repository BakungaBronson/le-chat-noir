import React from 'react';
import { Circle } from './Circle';

export class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat_position: Math.floor(Math.random() * 81)
        }
    }
    render() {
        const arr = Array(81).fill();

        return (
            <section className='circle-pad'>
                {arr.fill().map((item, index) => {
                    return <Circle key={index} cat_position={this.state.cat_position} index={index} />
                })}
            </section>
        )
    }
}