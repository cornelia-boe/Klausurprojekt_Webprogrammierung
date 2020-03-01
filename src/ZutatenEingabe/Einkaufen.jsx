import React from 'react'
import {List, ListItem, ListItemText, FormControlLabel, Checkbox, Button} from '@material-ui/core';



const Einkaufen = (props) => {
    return(
        <React.Fragment>
            <p>Würdest du auch wenn nötig einkaufen gehen?</p>
            <div>
        <Checkbox
            
            value="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
            </div>
            <Button variant="contained" color="secondary" >
        Absenden
      </Button >
        </React.Fragment>
        )
}
export default Einkaufen;

