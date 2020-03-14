import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0); 

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    const data = () => {
        fetch('/user', {
            method: "POST"
        })
        .then(response => {
            console.log("before JSON() =", response)
            return response.json()
        }).then(data => {
            console.log("after JSON() =", data)
        })
    }
    data()
    return ( 
        <div className ="main">
            <p>React app with Express deploy to Heroku</p>
            <p>{`Current Counter = ${counter}`}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;