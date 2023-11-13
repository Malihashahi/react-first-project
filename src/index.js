
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const tick =()=>{
    const elem=(
      <div>
        <h1>Hello Gyus</h1>
        <h2>it is
          {
          new Date().toLocaleTimeString()  
          }
        </h2>
      </div>
    )
    ReactDOM.render(elem, document.getElementById('root'));

  }
  setInterval(() => {
    tick();
  }, 1000);



reportWebVitals();