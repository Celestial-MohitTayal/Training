// Building & Using a Component
// Your task is to create a new MainGoal component which outputs a paragraph of text that describes your main course goal (e.g., "My main goal: Learn React in-depth and from the ground up").

// You'll have to create this new component from scratch and then use it inside the App component's JSX code.

// The finished app could look like this:


// (notice the "My main goal: Learn react from the ground up" text at the bottom)

// Important: To ensure that the automatic checks correctly detect your solution, your component must be called MainGoal and it also must be exported. To do that, simply add the export keyword in front of your MainGoal component.

// The MainGoal component also must contain the text "My main goal:" (followed by whatever your main course goal is).App


import React from 'react';

export function MyMainGoal(){
    return <p>My main goal: Learn React from ground up.</p>
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      <MyMainGoal />
    </div>
  );
}

export default App;
