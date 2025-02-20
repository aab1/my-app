import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Get reference to div with id root 
const el = document.getElementById('root');

//  Tell react to take control
const root = ReactDOM.createRoot(el);

// create a Component
/*
function AppSample() {
  // const time = new Date().toLocaleTimeString()
  const maxlen = 5
  return <input type="nummber" maxLength={maxlen}/>;
}
*/
// show the Component on the screen
root.render(
    <App />
);

// you will get an error if you try to print an object e.g. const profile = {name, age}

//you can search how to create an input field that takes number by looking up mdn number input

//Examples of props rules in jsx
/*
{<input
type = "number"
min={5} 
list={[1,2,3]}
style={{colr: 'red'}}
alt={message}/> 
*/