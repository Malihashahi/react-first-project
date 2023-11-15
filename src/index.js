
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Timer extends React.Component{
  render(){
    return(
      <h2>it is
      {
      new Date().toLocaleTimeString()  
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
    <div>
    <Hello/>
    <Timer />
 
  </div>
  )
  }

}

const elem =new App();


const tick =()=>{
   
    ReactDOM.render(<App/>, document.getElementById('root'));

  }
  setInterval(() => {
    tick();
  }, 1000);



reportWebVitals();