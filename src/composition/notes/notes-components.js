import React, { Component } from 'react';
// This line of code creates a new variable. That variable’s name is React, and its value is a particular, imported JavaScript object. The methods imported from 'react' don’t deal with the DOM at all. 

import ReactDOM from 'react-dom';
//  The methods imported from 'react-dom' are meant for interacting with the DOM. exp. ReactDOM.render().


// Component classes
// use a JavaScript class to define a new React component
//functions are another way to do this, but this is classes 

// React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

// Component class variable names must be UpperCamelCase

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

//  {
//   render() {
//     return <h1>Hello world</h1>;
//   }
// };

//  is the instructions for what to build and should be written in typical JavaScript syntax
// A render method must contain a return statement. Usually, this return statement returns a JSX expression
// In order to render a component, that component needs to have a method named render


ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

// ^^this is what allows MyComponentClass to make Components
// ReactDOM.render() will tell <MyComponentClass /> to call its render method.

// MyComponentClass has one method:
// MyComponentClass.render(). Therefore, <MyComponentClass /> also has a method named render.

// You could make a million different <MyComponentClass /> instances, and each one would inherit this same exact render method.
