import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
var interval;


class Timer extends React.Component{
  constructor(){
    super();
    this.state={
      time : new Date().toLocaleTimeString()
    }
  }
componentDidMount(){
  console.log("componentDiMount");
   interval= setInterval(()=>{
    this.setState({
      time:new Date().toLocaleTimeString()
    })
    },1000);
}
componentDidUpdate(){
  console.log("componentDidUpdate");
}
componentWillUnmount(){
  console.log(this.state.time);

}
  render(){
    console.log("componentDiMount");
    return(
      <h2 className='timer'>it is
      {
        this.state.time
      }
      
    </h2>
    )

  }
}
export default Timer;