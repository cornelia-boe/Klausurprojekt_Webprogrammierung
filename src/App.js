import React from 'react';
import logo from './logo.svg';
import './App.css';
import zutaten from './ZutatenEingabe/Liste.jsx'

function App() {
  return (
    <div >
      <h1> Willkommen</h1>
      <p> Wähle die Zutaten aus, die du zu Hause hast</p>
      <input type="checkbox" name="zutat" value="test"></input>
      <p>Würdest du auch wenn nötig einkaufen gehen?</p>
      
    </div>
  );
}

export default App;
