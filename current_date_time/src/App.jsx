import React from 'react';
const name = "Jay";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

function App() {
  return (
    <>
    <h2 className="name">`Hello there, My name is {name}`</h2>
  <h3 className="date">Today's date is :=={currDate}</h3>
  <h3 className="time">Current Time is:=={currTime}</h3>
    </>
  );
}

export default App;
