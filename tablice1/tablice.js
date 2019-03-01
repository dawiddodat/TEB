
let elPrzycisk = document.getElementById('przycisk');
let elImie= document.getElementById('imie');
let elNazwisko = document.getElementById('nazwisko');
let elMiasto = document.getElementById('miasto');
let elSzkola1 = document.getElementById('szkola1');
let elSzkola2 = document.getElementById('szkola2');
let elKomunikat = document.getElementById('komunikat');

let imie, nazwisko, miasto, szkola, komunikat;

function wyswietl() {
  komunikat = ''
  imie = elImie.value
  nazwisko = elNazwisko.value
  miasto = elMiasto.value




if (elSzkola1.checked) {
  szkola = "Szkoła średnia" ;
} else if(elSzkola2.checked) {
  szkola = "Studia" ;
}

if (miasto == 'p' || miasto == 'g') {
  wojewodztwo = 'wielkopolskie';
}else if (miasto == 's' || miasto == 'sz') {
  wojewodztwo = 'zachodniopomorskie'
}






switch (miasto) {
  case 'p':
  miasto = "Poznań";
  break;
  case 'g':
  miasto = "Gniezno";
  break;
  case 's':
  miasto = "Stadgard";
  break;
  case 'sz':
  miasto = "Szczecin";
  break;
 default:

}

tab = new Array(imie, nazwisko, miasto, szkola);

  komunikat += 'Imię: ' + imie + 'Nazwisko: ' + nazwisko + '<br>Miasto: ' + miasto + '<br>Wojewodztwo: ' + wojewodztwo + '<br>Szkoła: ' + szkola;

  elKomunikat.innerHTML = komunikat;


}






elPrzycisk.addEventListener('click', wyswietl);
