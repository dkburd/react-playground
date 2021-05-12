import React from 'react';

// Always add super(props) inside of React class component constructor methods
//  When we use the extends React.Component syntax, we're building a new blueprint based off of the React.Component class. The super function is used inside classes to reach into the original blueprint. We used super here to repeat the functionality that was defined in the constructor inside the React.Component class

class TheDate extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    foo: 'foo',
    hello: 'Hello, world!',
    list: [1, 2, 3],
    obj: { nested: 'object', yes: true },
  }
}
  render() {
    return <div />
  }
}



export default TheDate
