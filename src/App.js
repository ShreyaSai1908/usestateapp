import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter stateVariable ={count} setModifierfunction={setCount}/>       
    </div>
  );
}

export default App;
