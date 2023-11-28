import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Computer vision
        </p>
        <p>Insert URL or type prompt:</p>
        <input type="text" size={70} placeholder="Enter the URL of the image to be analyzed or the prompt of the image to generate"></input><br></br>
        <button>Analyze</button>
        <button>Generate</button>
      </header>
    </div>
  );
}

export default App;
