import React from 'react'

var namen = ['Old Fashioned', 'Mojito', 'Vodka Mojito', 'Skylap', 'So Sunrise', 'Tequila Sunrise'];
//[[genaue Zutaten für den jeweiligen Cocktail]]
var inhalt = [['1 ganzer Zuckerwuerfel (weiß)', '2 Spritzer Würzbitter', '1 1/2 Teile Bourbon', '1 Spirale Orange'],
['8 ganze Minzen', '2/3 Teile Zuckersirup', '1 Teil Limettensaft', '1 1/2 Teile Leichter Rum', 'Sodawasser',
'Eiswürfel'], ['1 1/2 Teile Absolut Vodka', '2/3 Teil Zuckersirup', '6 ganze Minzen', '4 viertel Limette'
, 'Sodawasser'], ['1/3 Teil Aprikosenbrand', '1/3 Teil Absolut Vodka', '1/3 Teil Curacao', '1/3 Teil Leichter Rum'
, '2/3 Teil Orangensaft', '2/3 Teil Ananassaft', '1 ganze Marsaschino-Kirsche', 'Orange', 'Eiswürfel'],
['1 1/2 Teile Absolute Vodka', '5 Teile Orangensaft', '1 Spritzer Grenadine', '1 Scheibe Orange', 'Eiswuerfel'],
['1 1/2 Teile Tequila', '4 Teile Orangensaft', '1 Spritzer Grenadine', '1 Spalte Orange', '1 Ganze Kirsche',
'Eiswürfel']];

const Grunddaten = (props) => {
    return(
        <h3>Grunddaten</h3>
        )
}
export default Grunddaten;

/*
// Hier wird der jeweilige Name des Cocktails ausgegeben und dann die Zugehörigen Zutaten aus dem Array 
 if (props.cocktails.value = 'Old Fashioned') {
     return(
         <h2> Old Fashioned </h2>
         inhalt[0]
     )
 }
 else if (porps.cocktails.value = 'Mojito') {
     return(
         <h2> Mojito </h2>
         inhalt[1]
     )
 }
 else if (porps.cocktails.value = 'Vodka Mojito') {
     return(
         <h2> Vodka Mojito </h2>
         inhalt[2]
     )
 }
 else if (props.cocktails.value = 'Skylap') {
     return(
         <h2> Skylap </h2>
         inhalt[3]
     )
 }
 else if (props.cocktails.value = 'So Sunrise') {
     return(
         <h2> So Sunrise </h2>
         inhalt[4]
     )
 }
 else {
     return(
         <h2> Tequila Sunrise </h2>
         inhalt[5]
     )
 }
*/