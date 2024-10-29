// Conditional Content
// You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.

// Therefore, your task is to conditionally show a warning box once a user has clicked a specific button. Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).

// The finished app should display this UI, if the <button> has not been clicked yet:





import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"

export default function App() {
    const [isDangerous,setIsDangerous] = React.useState(false)
    function handleCheck(){
        setIsDangerous(!isDangerous)
    }
    return (
      <div>
      {isDangerous &&
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleCheck}>Proceed</button>
        </div>
      }
       {!isDangerous && <button onClick={handleCheck}>Delete</button>}
      </div>    
    );
}