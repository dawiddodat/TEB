

let mail = prompt('Podaj maila');

regMail = /^[a-z0-9]{2-10}@[a-z0-9]{2,6}\.[a-z]{2,3}$/i;

regEx = /\W/; //litera,cyfra lub znak podkreslenia

regEx = /\D/; //cyfry

regEx = /(szkola)/; //grupa
regEx = /(szkola){2}/;

let sprawdzMail = regMail.test(mail);
console.log('Mail: ' + sprawdzMail);
