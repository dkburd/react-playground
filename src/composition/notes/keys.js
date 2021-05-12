const validJsx = (
  <ul>
    {[
      <li key='uniqueKey' />,
      <li key='anotherKey' />,
    ]}
  </ul>
)

const alsoValidJsx = (
  <ul>
    {[
      <li key={1} />,
      <li key={2} />,
    ]}
  </ul>
)

// making unique keys for fetch response values:: 

// Imagine we had the following response from a server:

// {
//   "items": [
//     { "id": "abc123", "name": "Foo" },
//     { "id": "def456", "name": "Bar" },
//     { "id": "ghi789", "name": "Herp" },
//     { "id": "jkl012", "name": "Derp" }
//   ]
// }

// We can make an array of elements like so:

// const arrayOfLis = apiResponse.items.map((item) =>
//   <li key={item.id}>
//     {item.name}
//   </li>
// )
// return (
//   <ul>
//     {arrayOfLis}
//   </ul>
// )


// A key is a JSX attribute similar to an id attribute.
// React uses keys internally to keep track of lists. If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order

// use if:
// The list-items have memory from one render to the next exp. to-do list renders

// A list’s order might be shuffled. exp. list of search results

// alternate version 
// unique keys for list items with i
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));