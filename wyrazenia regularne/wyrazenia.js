// true lub false, prawda lub fałsz

let tekst = 'TEB';


let regEx = /^tekst$/i;

regEx = /[e]/i;
regEx = /[4]/;
regEx = /[0-9]/;
regEx = /[a-z]/i;
regEx = /[A-Z]/;
regEx = /[A-Z]|[a-z]/;
regEx = /[A-z]/;//bład
regEx = /[A-Z]|[a-z]|[ąężźśćńół]/;

let imie = prompt('Podaj imię');
regImie = /^[A-Za-ząężźśćńół]{2,}$/i;
regImie = /^[A-Za-ząężźśćńół\s]{2,}$/i;

regEx = /\S/;
//mail 1
regEx = /[a-z]+@/;
regEx = /^TE[B]?/;
regEx = /^..$/;
regEx = /^\.$/;




let sprawdz = regEx.test(tekst);
let sprawdzImie = regImie.test(imie);

console.log(sprawdz);
console.log('Imię: ' + sprawdzImie);
