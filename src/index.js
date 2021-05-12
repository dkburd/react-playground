import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// Note: document.getElementById('root') achieves the same result as document.querySelector('#root'). It doesn't matter which one you use. The querySelector method works with any CSS selector and getElementById only works with ids

ReactDOM.render(<App />, document.getElementById('root'));