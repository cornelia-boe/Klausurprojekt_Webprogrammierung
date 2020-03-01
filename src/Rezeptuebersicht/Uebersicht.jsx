import React from 'react';
import {List, ListItem, ListItemText, FormControlLabel, Checkbox, Button} from '@material-ui/core';
/*import Einkaufen from '../src/ZutatenEingabe/Einkaufen';*/


const Uebersicht = (props) => {
    return(
        <React.Fragment>
        <List>
            {props.cocktails.map(value => {
                return( <ListItem key={value}>
                    <FormControlLabel
                    control={
                    <Checkbox />}
                    label={value}
      />
                </ListItem>)
            })}
        </List>
        <Button variant="contained" color="secondary">
        Auswählen
      </Button>
        </React.Fragment>
        )
}
export default Uebersicht;


/*class Rezepte extends Einkaufen {
    // Wenn man eingehen möchte, werden Matchingraten berechnet und mit dem Namen des Cocktails ausgegeben.
    if (Checkbox.primary = checked) {
        function matches (){
            swith (props.cocktails) {
                case item = "Old Fashioned":
                    for i in oldFashioned:
                        if (i in checkitem) {
                            let match = 0;
                            match = match + 1
                        }
                        return (
                            <p> Old Fashioned   {match/oldFashioned.length} <p>
                        );
                    break;
                case item = "Mojito":
                    for i in mojito:
                        if (i in checkitem) {
                            let match = 0;
                            match = match + 1
                        }
                        return (
                            <p> Mojito   {match/mojito.length} <p>
                        )
                    break;
                case item = "Vodka Mojito":
                    for i in vodkaMojito:
                        if (i in checkitem) {
                            let match = 0;
                            match = match + 1
                        }
                        return (
                            <p> Vodka Mojito  {match/vodkaMojito.length} <p>
                        )
                    break;
                case item = "Skylap":
                    for i in skylap:
                        if (i in checkitem) {
                            let match = 0;
                            match = match + 1
                        }
                        return (
                            <p> Skylap   {match/skylap.length} <p>
                        )
                    break;
                case item = "So Sunrise":
                    for i in soSunrise:
                        if (i in checkitem) {
                            let match = 0;
                            match = match + 1
                        }
                        return (
                            <p> So Sunrise  {match/soSunrise.length} <p>
                        )
                    break;
                case item = "Tequila Sunrise":
                    for i in tequilaSunrise:
                        if (i in checkitem) {
                            let match = 0;
                            match = match + 1
                        }
                        return (
                            <p> Tequila Sunrise  {match/tequilaSunrise.length} <p>
                        ) 
                    break;              
            }
        }
    }
    // Wenn man nicht Einkaufen gehen möchte werden die passenden Rezepte ausgegeben oder wenn keines passt ein Fehler.
   else {
       if (checkitem = oldFashioned) {
           return (
               <p> Old oldFashioned </p>
           )
       }
       else if (checkitem = mojito) {
           return (
               <p> Mojito </p>
           )
       }
    else if (checkitem = vodkaMojito) {
           return (
               <p> Vodka Mojito </p>
           )
       }
    else if (checkitem = skylap) {
           return (
               <p> Skylap </p>
           )
       }
    else if (checkitem = soSunrise) {
           return (
               <p> So Sunrise </p>
           )
       }
    else if (checkitem = tequilaSunrise) {
           return (
               <p> Tequila Sunrise </p>
           )
       }
    else {
        return(
            <p> Es gibt leider kein Rezept, dass zu Ihren Zutaten passt. </p>
        )
    }
}
}
*/