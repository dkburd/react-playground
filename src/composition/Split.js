import React from 'react'
import './Split.css';


// passing props as children 
function Split(props) {
  return (
    <div className="split">
      {props.children}
      {/* adding this allows you to use text prop in app function */}
      {props.text}
    </div>
  );
}

// function Split(props) {
//   const {text} = props
//   return (
//     <div className="split">
//       {props.children}
//       {/* {text} */}
//     </div>
//   );
// }




export default Split;