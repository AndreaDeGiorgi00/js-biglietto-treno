console.log("JS OK");
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/


/*
1 - chiedere numero kilometri
1b- rendere int
1c- salvare il valore
2 - chiedere l'età
2b- rendere int
2c- salvare il valore
3 - calcolare valore iniziale biglietto in let per poterlo cambiare negli if
4 - verificare se sono disponibili sconti 
5 - applicare eventuali sconti 
6 - "stampare" il prezzo del biglietto
*/

const kilometri = parseInt(prompt("quanti kilometri farai?" , "230" ));
const età = parseInt(prompt("quanti anni hai?" , "89" ));
const targetKilometri = document.getElementById("kilometri");
const targetEtà = document.getElementById("età");


////console.log(kilometri);
////console.log(età);
let prezzoBigliettoIntero = kilometri * 0.21;

if (isNaN(età) || isNaN(kilometri) || età < 0 || kilometri < 0 ){
    alert("dati non corretti")

}else if (età > 65){
    document.getElementById("prezzoIniziale").innerText = "il costo iniziale del tuo biglietto è: " + prezzoBigliettoIntero + "£";
    prezzoBigliettoIntero =  prezzoBigliettoIntero - (prezzoBigliettoIntero * 4) / 10;
    prezzoBigliettoIntero = prezzoBigliettoIntero.toFixed(2);
    document.getElementById("prezzoFinale").innerText = "il costo del tuo biglietto è: " + prezzoBigliettoIntero + "£";

}else if (età < 18){
    document.getElementById("prezzoIniziale").innerText = "il costo iniziale del tuo biglietto è: " + prezzoBigliettoIntero + "£";
    prezzoBigliettoIntero =  prezzoBigliettoIntero - (prezzoBigliettoIntero  * 2)/ 10;
    prezzoBigliettoIntero = prezzoBigliettoIntero.toFixed(2);
    document.getElementById("prezzoFinale").innerText = "il costo del tuo biglietto è: " + prezzoBigliettoIntero + "£";
}

targetKilometri.innerText =  "Hai selezionato che il tuo percorso sarà di: " + kilometri +"kM";
targetEtà.innerText = "Hai selezionato che la tua età è di: " + età + "anni";

