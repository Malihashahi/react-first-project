import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import Hello from './hello';
import Timer from './timer';


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
export default App;
