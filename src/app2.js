
import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import './style.css';
import Hello from './hello';
import Timer from './timer';
import TimeList from './TimeList';
import { TestComtext } from './testcontext';


// class App extends React.Component {
//   constructor(){
//    super();
//    this.state={
//     title :"Hi firends"
//    } 
//   }
// handleSetTitle =()=>{
//   this.setState({
    //title: "welcome to my website"
//   })
// }


//   render(){
//     return(
//     <div className='main'>
//     <Hello title={this.state.title}/>
//     <Timer handleSetTitle={this.handleSetTitle}/>
 
//   </div>
//   )
//   }

// }
const App =()=>{
  const [ title, setTitle]=useState("Hi firends");
  const [ isLight, setIsLight]=useState(false);
  const [timeArr,setTimeArr]=useState(["00:23:49"]);
  useEffect(() =>{
  console.log("useEffect");
  return ()=>{
    
  }
  },[isLight])
 
  const handleIsLight= ()=>{
    setIsLight(!isLight)
  }
  return(
       <TestComtext.Provider value={{
        timeArr,
       setTimeArr}} >
        <div className='main' style={{background:isLight ? "white" :"black"}}>
        <Hello title={title}/>
        <Timer
       
        isLight={isLight} handleIsLight={handleIsLight}/>
       
       <TimeList />
       
      </div>
      </TestComtext.Provider>
      )
}
export default App;