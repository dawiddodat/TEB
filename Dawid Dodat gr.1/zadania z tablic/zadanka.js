//tworzenie tablicy za pomoca literalu tablicy
let kolory  = ['czerwony', 'zielony', 'niebieski'];
console.log(kolory[0]); //czerwony

//tworzenie tablicy
let samochody = new Array('Fiat', 'BMW', 'Audi');

samochody.push('Ferrari');
console.log('ilość elementów w tablicy: ' + samochody.length);
console.log('ostatni samochód: ' + samochody[samochody.length - 1]);
 //tablice wielowymiarowe
 let tab = new Array(
new Array('Jan', 'Kowal', 'Poznań'),
new Array('Anna', 'Nowak', 'Poznań'),
new Array('Paweł', 'Kowal', 'Gniezno')
 );
console.log(tab[0]);//wyswietlenie jednej tablicy
console.log(tab[1][0]);//wyswietlenie jednego elementu tablicy



/*
utworz tablice wielowymiarowom ktora bedzie zawierala trzech pilkarzy
wyswietl na ekranie krzysztofa Piatka w formacie
Imie:
Nazwisko :
Narodowsoc:
*/

let pilkarze = new Array(
  new Array('Lionel', 'Messi', 'Rosario'),
  new Array('Andres', 'Iniesta', 'Barcelona'),
  new Array('Krzysztof', 'Piątek', 'Milan')

);
document.write('Imię: '  + pilkarze[2][0] + '<br>Nazwisko: '  + pilkarze[2][1] +
'<br>Narodowość: ' + pilkarze[2][2] + '<hr>');


let imiona = ['Anna', 'Julia', 'Zenon', 'Krystyna'];
console.log(imiona);
let posortowana = imiona.sort();
console.log(imiona);
let odwrotnosc = imiona.reverse();
console.log(imiona);


console.log(odwrotnosc.indexOf('Anna'));
console.log(odwrotnosc.indexOf('Janusz'));

odwrotnosc.pop();
console.log(imiona);


odwrotnosc.push('Janusz');
console.log(imiona);



let liczby = [1, 4, 10, 45, 100, -1, 8];
console.log(liczby);

let sortliczby = liczby.sort();
console.log(liczby);

liczby.sort(
  function(a, b){
    return a -b;
  }
);
console.log(liczby);


/*
utworz formularz z loginem(text) i haslem(passwd)
zapisz dane do tablicy
Uzytkownik wybiera kolor w jakim login i haslo ma byc wyswietlane
na ekranie w naglowku trzeciego stopnia.
Wyswietl dane w formacie:
login haslo kolor
*/
let login, pass, kolr;
let elPrzycisk = document.getElementById('przycisk');
let elKomunikat = document.getElementById('komunikatLogin');

let tabLogin = new Array();

function zapisz(){
  login = document.getElementById('login').value;
  pass = document.getElementById('pass').value;
  kolor = document.getElementById('kolor').value;
  tabLogin.push(
    new Array(login, pass, kolor)
  );
  console.log(tabLogin);


let wyswietl = '';

for (let  i = 0; i < tabLogin.length; i++) {
  for (let j  = 0; j < tabLogin[i].length; j++) {
  switch (j) {
    case 0:
      wyswietl += '<h3>Login: ';
      break;
      case 1:
        wyswietl += ', hasło: ';
        break;
        case 2:
          wyswietl += ', kolor: ';
          break;

  }
  wyswiet += '<span style="color:' + tabLogin[i][2] + '">' + tabLogin[i][j] + '</span>';
  }
  wyswietl += '<h3>';
}
elKomunikat.innerHTML = wsywietl;
}

elPrzycisk.addEvenListenner('click', zapisz);
