let a = 13.3;
let b = 29.5;
let c = 1;

let pierwiastek = Math.sqrt(a);

let min = Math.min(a, b, c);

let max = Math.max(a, b, c);


let zaokraglenie = Math.round(b);

console.log(zaokraglenie);

//abs, round, floor


let x = -56;
let y = -13.1;
let z = -14.9;

document.write('<br>' + Math.abs(x) + '<br>');//56
document.write('<br>' + Math.abs(y) + '<br>');//13.1
document.write('<br>' + Math.abs(z) + '<br>');//14.9




document.write('<br>' + Math.round(x) + '<br>');//56
document.write('<br>' + Math.round(y) + '<br>');//13 minus
document.write('<br>' + Math.round(z) + '<br>');//15



document.write('<br>' + Math.floor(x) + '<br>');//56
document.write('<br>' + Math.floor(y) + '<br>');//14  minus
document.write('<br>' + Math.floor(z) + '<br>');//15



//potegowanie

let potega = Math.pow(2, 10);
console.log(potega); //1024

//losoowanie

let losuj = Math.random();
console.log(losuj);



//wylosuj liczbe z przedzialu od zera do dziesieciu


 losuj = Math.floor(Math.random() * 11);
console.log(losuj);

var zadanie = Math.floor((Math.random() * 11) - 5);
console.log(zadanie);
/* zad1 wylosuj 20 liczb z przedzialu -5, 5. liczby maja byc wylosowane
po nacisnieciu przycisku*/
/* zad2 napisz funkcje ktora zostanie wywolana */
