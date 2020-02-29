import React from 'react';
import {List, ListItem, ListItemText, FormControlLabel, Checkbox, Button} from '@material-ui/core';


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

/*
Was noch fehlt: Hier dürfen nur die Rezepte ausgegeben werden. Die zu den vorher ausgewählten Zutaten passen.
Wenn eingekauft werden würde müssen Matchingraten angezeigt werden. Wenn nicht die matchenden Rezept
oder ein Fehler.
*/

/* 
function matches () {
    If (checkitem = )
}
*/