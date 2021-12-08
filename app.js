let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

// value **
let exponents = tableauUn.map(value => value ** value);
document.getElementById('exponents').innerHTML += exponents.toString();

// value *10
let multiplication = tableauUn.map(value => value * 10);
document.getElementById('multiplication').innerHTML += multiplication.toString();

// value +2/28
let addition = tableauUn.map(value => value +2 / 28);
document.getElementById('addition').innerHTML += addition;

// filter <2
let filter1 = tableauUn.filter(value => value < 2);
document.getElementById('filter1').innerHTML += filter1;

// filter divisible /2
let filter2 = tableauUn.filter(value => value % 2);
document.getElementById('filter2').innerHTML += filter2;

// filter *3 > 10
let filter3 = tableauUn.filter(value => (value * 3) > 10);
document.getElementById('filter3').innerHTML += filter3;

// length
let length1 = tableauDeux.map(value => value.length);
document.getElementById('length1').innerHTML += length1;

// length + value
let length2 = tableauDeux.map(value => "Longueur de" + " " + value + " " + "= " + value.length);
document.getElementById('length2').innerHTML += length2;

// concat
let concat = tableauDeux.map(value => value + value);
document.getElementById('concat').innerHTML += concat;

// filter > 2+2
let length3 = tableauDeux.filter(value => value.length > 2 + 2);
document.getElementById('length3').innerHTML += length3.toString();

// filter %2
let length4 = tableauDeux.filter(value => value.length % 2);
document.getElementById('length4').innerHTML += length4;

// filter -3 > 10
let length5 = tableauDeux.filter(value => (value.length - 3) > 10);
document.getElementById('length5').innerHTML += length5;
