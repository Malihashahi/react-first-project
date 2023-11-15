
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import reportWebVitals from './reportWebVitals';

class Timer extends React.Component{
  constructor(){
    super();
    this.state={
      time : new Date().toLocaleTimeString()
    }
  }
  render(){
    setInterval(()=>{
    this.setState({
      time:new Date().toLocaleTimeString()
    })
    },1000);
    return(
      <h2 className='timer'>it is
      {
        this.state.time
      }
      
    </h2>
    )

  }
}
class Hello extends React.Component{
  render(){
    return(
      <h1>Hello Gyus</h1>
    )
  }

}
class App extends React.Component {
  render(){
    return(
    <div className='main'>
    <Hello/>
    <Timer />
 
  </div>
  )
  }

}



//const tick =()=>{
   
   ReactDOM.render(<App/>, document.getElementById('root'));

 // }
  //setInterval(() => {
  //  tick();
 // }, 1000);



reportWebVitals();