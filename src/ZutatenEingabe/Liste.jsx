import React from 'react'
import {List, ListItem, ListItemText, FormControlLabel, Checkbox} from '@material-ui/core';

var zutaten = ['Zuckerwuerfel (weiß)', 'Wuerzbitter', 'Bourbon', 'Orange', 'Minze', 'Zuckersirup', 'Limettensaft',
 'Leichter Rum', 'Sodawasser', 'Eiswuerfel', 'Absolut Vodka', 'Limette', 'Aprikosenbrand', 'Curacao',
'Orangensaft', 'Ananassaft', 'Maraschino-Kirsche', 'Grenadine', 'Tequila', 'Kirsche'];

const Liste = (props) => {
    return(
        <React.Fragment>
        <p> Wähle die Zutaten aus, die du zu Hause hast</p>
        <List>
            {props.zutaten.map(value => {
                return(
                    
                <ListItem key={value}>
                    <FormControlLabel
                    control={
                    <Checkbox />}
                    label={value}
      />
                </ListItem>)
            })}
        </List>
        </React.Fragment>
        )
}
export default Liste;

/* 
// Hier wird der Inhalt der abgehackten Checkboxen in einem Array gespeichert.
const checkboxes = zutaten.value;
const num = checkboxes.length;

for (let i; i<num; i++)  {
    if (checkboxes[i].checked === true) {
        checkitem = [];
        checkitem = checkboxes[i].value + " ";
    }
} */