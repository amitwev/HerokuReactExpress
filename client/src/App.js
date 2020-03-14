import React, { useState } from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0); 

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return ( 
        <div className ="main">
            <p>React app with Express deploy to Heroku</p>
            <p>{`Currenct Counter = ${counter}`}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;