// palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato
function palindroma(s) {
    var res = true;
    for (var i = 0; i <= s.length / 2 && res; i++) {
        if (s.charAt(i) != s.charAt(s.length - (i + 1))) {
            res = false;
        }
    }
    return res;
}
var p = prompt('inserisci una parola');
if (palindroma(p)) {
    console.log('è palindroma');
} else {
    console.log('non è palindroma');
}

//gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

var g = prompt('scegli pari o dispari');
var n = parseInt(prompt('inserisci un numero compreso tra 1 e 5'));
var m = Math.floor(Math.random() * 5) + 1;
console.log('il computer ha giocato: ' + m);
if (g.charAt(0) == 'p' && (m + n) % 2 == 0) {
    console.log('hai vinto');
} else if (g.charAt(0) == 'd' && (m + n) % 2 != 0) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}
