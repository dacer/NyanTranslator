import React, { useState } from 'react';
import './App.css';
import { translateFromNyan, translateToNyan } from './utils';

function App() {
  const [text, setText] = useState("");
  const [nyan, setNyan] = useState("");

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setNyan(translateToNyan(event.target.value));
  }

  const handleNyanAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNyan(event.target.value);
    setText(translateFromNyan(event.target.value));
  }

  return (
    <div className="App">
      <textarea 
        id="text-area" 
        placeholder="Input something"
        value={text}
        spellCheck="false"
        onChange={handleTextAreaChange} />
      <br/>
      <textarea 
        id="nyan-area" 
        placeholder="Nyan Nyan"
        value={nyan}
        spellCheck="false"
        onChange={handleNyanAreaChange} />
    </div>
  );
}

export default App;
