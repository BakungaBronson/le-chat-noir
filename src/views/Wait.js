import React from 'react';
import '../index.css';

export class Wait extends React.Component {
    render() {
        return (
            <section className='intro'>
                <div className='row'>
                    <h1>Le Chat Noir</h1>
                    <img src="https://www.lifepng.com/wp-content/uploads/2020/11/Le-Chat-Noir-png-hd.png" width="200px" />
                    </div>
                    <div className='row'>
                    <br/>
                    <h3>Please Wait...</h3>
                </div>
            </section>
        )
    }
}