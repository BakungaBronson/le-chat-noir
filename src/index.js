import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './views/Start';

ReactDOM.render(
  <section className='intro'>
    <div className='row'>
      <h1>Le Chat Noir</h1>
      <img src="https://www.lifepng.com/wp-content/uploads/2020/11/Le-Chat-Noir-png-hd.png" width="200px" />
    </div>
    <div className='row'>
      <input type='text' placeholder='Enter number of rows' />
      <br/>
      <button>Send</button>
    </div>
  </section>,
  document.getElementById('root')
);

