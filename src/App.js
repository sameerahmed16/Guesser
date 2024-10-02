import React, { useState } from 'react';
import './App.css';

function App() {
  const [userNumber, setUserNumber] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [result, setResult] = useState('');

  const handleGuess = () => {
    if (userNumber === '') {
      setResult('Please enter a number!');
      return;
    }

    setIsThinking(true);
    setResult('');

    setTimeout(() => {
      setIsThinking(false);
      setResult(`I think the number you're thinking of is... ${userNumber}!`);
    }, 3000);
  };

  return (
    <div className="App">
      <h1>Sameer is Going to Guess Your Number!</h1>
      <p>Think of a number, and I'll guess it!</p>

      <input 
        type="number" 
        value={userNumber} 
        onChange={(e) => setUserNumber(e.target.value)} 
        placeholder="Enter your number"
      />

      <button onClick={handleGuess}>Guess My Number!</button>

      {isThinking && <p className="thinking">Let me think...</p>}

      <p className="result">{result}</p>
    </div>
  );
}

export default App;
