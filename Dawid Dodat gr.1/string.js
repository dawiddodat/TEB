let text = 'TEB Edukacja';
console.log(text);
console.log(text.length + ' znaków');
let długość = text.length;  //12
document.write('Długość tekstu: ' + długość);

let pierwszy = text.charAt(0);

let ostatni = text.charAt(text.length - 1);

console.log(text.charAt(4));

console.log(text.charCodeAt(0));

console.log(pierwszy);

console.log(ostatni);

//sprawdz czy zmienna 0 nazwie tekst ma minimum jedna duza litere

let tekst = 'Janusz';
let znak;
for (var i = 0; i < tekst.length; i++) {
znak = text.charCodeAt(i);
if (znak >= 65 && znak <= 90) {
  document.write('<br>Tekst posiada wielką literę: ' + tekst.charAt(i));
  break;
}else {
    document.write('<br>Brak wielkiej litery: ' + tekst.charAt(i));
    break;
}
}
let duze = tekst.toUpperCase();

let male = tekst.toLowerCase();

console.log(male);



//Uzytkownik podaje z klawiatury w formularzy swoje imie i nazwisko
//zamien znaki, aby pierwsza litera byla, a pozostale male
//utworz funkcje o nazwie zmiana
