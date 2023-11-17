import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import Hello from './hello';
import Timer from './timer';


class App extends React.Component {
  constructor(){
   super();
   this.state={
    title :"Hi firends"
   } 
  }
handleSetTitle =()=>{
  this.setState({
    title: "welcome to my website"
  })
}

  render(){
    return(
    <div className='main'>
    <Hello title={this.state.title}/>
    <Timer handleSetTitle={this.handleSetTitle}/>
 
  </div>
  )
  }

}
export default App;
