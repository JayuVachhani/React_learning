import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App = ()=> {
  // get current time
  let time  = new Date().toLocaleTimeString();

//array using destructuring to assing value from react hook
//ctime is indicates current state
//setCtime indicates updated functiion
// value passed in useState hook it will assign to current state(ctime)
const [ctime,setCtime] = useState(time);

// it will update current time
const UpdateTime = () =>{
  time = new Date().toLocaleTimeString();
  // assign current time to updated function(setCtime)
  setCtime(time);
};
// it will call updatetime function on every second
setInterval(UpdateTime,1000)
  return (  

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{ctime}</h2>       
      </header>
    </div>
    
  );
  
}

export default App;
