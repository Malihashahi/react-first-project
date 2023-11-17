import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
var interval;


class Timer extends React.Component{
  constructor(){
    super();
    this.state={
      time :10
    }
  }
componentDidMount(){
 
   interval= setInterval(()=>{
    this.setState({
      time: this.state.time-1
    })
    },1000);
}
componentDidUpdate(){
  console.log("componentDidUpdate");
}
componentWillUnmount(){
 if (this.state.time == 0){
 clearInterval(interval);
 }

}
  render(){
    console.log("componentDiMount");
    return(
    <>
      <h2 className='timer'>it is
      {
        this.state.time
      }
      
    </h2>
    <button onClick={this.props.handleSetTitle}>Change</button>
    </>
    )

  }
}
export default Timer;