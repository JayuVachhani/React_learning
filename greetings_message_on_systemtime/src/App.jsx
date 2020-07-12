import React from 'react';
const name = "Jay";
const currTime = new Date().getHours();
let message = "";
const Greetingcolor = {

} ;





if(currTime>=0 && currTime<=12){
  message = "Good Morning";
  Greetingcolor.color = 'green';
}
else if(currTime>12 && currTime<=15){
message = "Good Noon";
Greetingcolor.color = 'yellow';
}
else if(currTime>15 && currTime<=18){
  message = "Good Afternoon";
  Greetingcolor.color = 'orange';
  }
  else if(currTime>18 && currTime<=21){
    message = "Good Evening";
    Greetingcolor.color = 'skyblue';
    }
else{message="Good Night";

}


function App() {
  return (
    <h2 className="greetings">Hello {name},<span  style={Greetingcolor}>{message}</span> Current Hour is {currTime}</h2>
  );
}

export default App;
