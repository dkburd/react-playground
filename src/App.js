import React, { Component } from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Tabs from './state/Tabs';

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];


// make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip color='#126BCC' message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='pink' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )


// this works by referencing Split.js items closed bracket 
function App() {
  return (
    <main className='App'>
      {/* <TheDate ={this.state.hello} /> */}
      <Tabs tabs={tabsProp} />

      <Split className='left' flexBasis={2}>
        <p>the text here is the children </p>
        <Tooltip message='i am inside left split'>
          should be default color
          </Tooltip>
        <p>
        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        </p>
        <p>
          I am a child of the split component
        </p>
      </Split>
      <Split className='right'>
          <Tooltip color='pink' message='i am inside the app tooltip message'>
          can i see this one
          </Tooltip>
        <p>
        I am also a child of the split component. 
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
        </p>
      </Split>

{/* this will not show up because - it will error, text is not a child of the split Component, its a custom prop 
self closing tag and text decloration wont be counted as a child and needs to be added in split compnonet/function  
*/}
<Split text ={"hey"}/>
    </main>
  )
}





export default App;