import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // initial value of hook is empty
  const [name, setName] = useState(""); 

  // here event is targeted to input field's data value
  // function inputValue(event){
  const inputValue = (event) => {
    // it will return current value
    setName(event.target.value);
  };


  const [fullname,updatedname]=useState();
  const getName=()=>{
    // direct access the name of the input field on click button
    updatedname(name)
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello {fullname}</h2>

        {/* onchange will get every element value provided by user */}
        <input type="text" placeholder="Your name" onChange={inputValue} ></input>
        <br></br>
        <button style={{backgroundColor:"yellowgreen", height:30}} onClick={getName}>Get Name</button>
      </header>
    </div>
  );
}

export default App;
