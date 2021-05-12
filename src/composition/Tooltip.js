import React from 'react';
import './Tooltip.css';

// these are the same: 
// props are a parameter
// function FunctionComponent(props) {
//   return <span>{props.children}</span>
// }

// props accessed by `this.props`
// class ClassComponent extends React.Component {
//   render() {
//     return <span>{this.props.children}</span>
//   }
// }


// We'll need two sections inside the Tooltip, one for the text to display and the second for the message that appears on a hover. We'll use the children prop for the normal text and a prop called message for the text that will appear.

// {props.children} - children...of what?
function Tooltip(props) {
  return (
    <span className='Tooltip'>
      <span 
      className='Tooltip-content'
      style={{color:props.color}}
      >
        {props.children}
      </span>
      <div className='Tooltip-message'>
        {props.message}
      </div>
    </span>
  )
}

// class component - basic
// class TooltipClass extends React.Component {
//   render() {
//     return <span />
//   }
// }

// class version of Tooltip example above
class TooltipClass extends React.Component {
    static defaultProps = {
    color: '#01A800', // green
  };
    render() {
    console.log('Using a class component!')
    console.log(this.props)
    return (
      <span className='Tooltip'>
        <span
          className='Tooltip-content'
          style={{ color: this.props.color }}
        >
          {this.props.children}
        </span>
        <div className='Tooltip-message'>
          {this.props.message}
        </div>
      </span>
    )
  }
}




// export the function version
// export default Tooltip;

// export the class version
export default TooltipClass;