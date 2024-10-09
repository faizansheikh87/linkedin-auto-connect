import React from 'react';
import './App.css';

function App() {
  const handleConnectClick = () => {
    // Logic to trigger connection logic if needed
    alert('This extension will now connect with all visible profiles.');
  };

  return (
    <div className="App">
      <h1>LinkedIn Auto Connect</h1>
      <button onClick={handleConnectClick}>Start Auto-Connect</button>
    </div>
  );
}

export default App;
