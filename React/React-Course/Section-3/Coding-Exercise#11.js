// Dynamic Styling
// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.

// The class should be applied when the <button> is clicked for the first time.

// Here's how the finished app should look like BEFORE the button was clicked:


import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isClicked,setIsClicked] = React.useState(false)
       function handleClick(){
            setIsClicked(!isClicked)
        }
    return (
        <div>
            <p className={isClicked?"active":null}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
