import React from "react";
import { useState } from "react";
function App() {
  const [isRunning, setisRunning]=useState(true);


  /* You will need to use a boolean state to manage the weather */

  function onSunClick() {
     setisRunning(false)
    // Complete this code when we click on Sunny Time
  }

  function onRainClick() {
     setisRunning(true)
    // Complete this code when we click on Sunny Time
  }

  function getTitle() {
    return isRunning ? "Rain Time" : "Sun Time" ;
    // This function manage the H1 text, depending on the weather
  }

  function getBackgroundColor() { 
    return isRunning ? "rainy" : "sunny"
    // This function manage the main class value, depending on the weather
  }

  return (
    <main  className={getBackgroundColor()}>
      <h1 >{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
