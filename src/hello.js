import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';


class Hello extends React.Component{
  render(){
    return(
      <h1>{this.props.title}</h1>
    )
  }

}
export default Hello;