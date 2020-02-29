import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Uebersicht from '../src/Rezeptuebersicht/Uebersicht'
import Schritte from '../src/Rezept/Schritte'
import Grunddaten from '../src/Rezept/Grunddaten'
import Einkaufen from '../src/ZutatenEingabe/Einkaufen'
import Liste from '../src/ZutatenEingabe/Liste'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

export default function App() {
  const [cocktails, setCocktails] = useState(['Old Fashioned', 'Mojito', 'Vodka Mojito', 'Skylap', 'So Sunrise', 'Tequila Sunrise']);
  const [zutaten, setZutaten] = useState(['Zuckerwuerfel (weiß)', 'Wuerzbitter', 'Bourbon', 'Orange', 'Minze', 'Zuckersirup', 'Limettensaft',
  'Leichter Rum', 'Sodawasser', 'Eiswuerfel', 'Absolut Vodka', 'Limette', 'Aprikosenbrand', 'Curacao',
 'Orangensaft', 'Ananassaft', 'Maraschino-Kirsche', 'Grenadine', 'Tequila', 'Kirsche']);
  const [oldFashioned, setOldFashioned] = useState(['Zuckerwuerfel (weiß)', 'Wuerzbitter', 'Bourbon', 'Orange']);
  const [mojito, setMojito] = useState(['Minzen', 'Zuckersirup', 'Limettensaft', 'Leichter Rum', 'Sodawasser', 'Eiswuerfel']);
  const [vodkamojito, setVodkamojito] = setState(['Absolut Vodka', 'Zuckersirup', 'Minzen', 'Limette', 'Sodawasser']);
  const [skylap, setSkylap] = setState(['Aproksenbrand', 'Absolut Vodka', 'Curacao', 'Leichter Rum', 'Orangensaft', 'Ananassaft', 'Marsachino-Kirsche', 'Orange', 'Eiswuerfel']);
  const [soSunsrise, setSoSunrise] = setState(['Absolut Vodka', 'Orangensaft', 'Grenadine', 'Orange', 'Eiswuerfel']);
  const [tequilaSunrise, setTequilaSunrise] = setState(['Tequila', 'Orangensaft', 'Grenadine', 'Orange', 'Kirsche', 'Eiswuerfel']);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">ZutatenEingabe</Link>
            </li>
            <li>
              <Link to="/Rezeptuebersicht">Rezeptübersicht</Link>
            </li>
            <li>
              <Link to="/Rezept">Rezept</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
           <Switch>
            <Route path="/Rezeptuebersicht">
              <Rezeptuebersicht />
              <Uebersicht cocktails={cocktails}/>
            </Route>
            <Route path="/Rezept">
              <Rezept />
              <Grunddaten />
              <Schritte />
            </Route>
            <Route path="/">
              <ZutatenEingabe />
              <Liste zutaten={zutaten}/>
              <Einkaufen/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function ZutatenEingabe() {
    return <h1> Willkommen</h1>;
  }
  
  function Rezeptuebersicht() {
    return <h2>Rezeptübersicht</h2>;
  }
  
  function Rezept() {
    return <h2>Rezept</h2>;
  }
