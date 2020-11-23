// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50



var bombe = [];
var tabella = [];
var tentativi = 100 - 16;
tentativi = 5;
var punteggio = 0;
var difficolta;
var livello;

difficolta = prompt("scegli la difficolta (1,2 o 3)");

switch (difficolta) {
  case "3":
    livello = 50;
    break;
  case "3":
    livello = 80;
    break;
  default:
    livello = 100;
}


while (bombe.length < 16) {
  var bombaRandom = generaBombe(1, 100);
  if (controlloBombe(bombe, bombaRandom) == false) {
    bombe.push(bombaRandom);
  }
}

var esplosione = false;

while (tabella.length < tentativi && esplosione == false) {
  var tentativiUtente = prompt("inserisci numero tra 1 e 100");
  if (controlloBombe(bombe, tentativiUtente) == true) {
    esplosione = true;
  } else if (controlloBombe(tabella, tentativiUtente) == false) {
    tabella.push(tentativiUtente);
    punteggio++;
  }
}


// ---------------------------------------------------------------------

function generaBombe(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function controlloBombe(array, element) {
  var copia = false;
  for (var i = 0; i < array.length; i++) {
    if (element == array[i]) {
      copia = true;
      return copia;
    }
  }
  return copia;
}
