// // If you want to create a list of JSX elements, then .map() is often your best bet. 

// // start out with an array of strings, call .map() on this array of strings, and the .map() call returns a new array of <li>s

// // the last line  {listItems} will evaluate to an array, because it’s the returned value of .map()! JSX <li>s don’t have to be in an array like this, but they can be.
// import React from 'react';
// import ReactDOM from 'react-dom';

// const strings = ['Home', 'Shop', 'About Me'];
 
// const listItems = strings.map(string => <li>{string}</li>);
 
// <ul>{listItems}</ul>

// // exp 2
// const people = ['Rowe', 'Prevost', 'Gare'];

// const peopleLis = people.map(person =>
//   // expression goes here:
// const liArray = [
//   <li>{person}</li>, 

// ];
// ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app')) 
// );