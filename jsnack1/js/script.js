
let numberS = [];

let somma = 0;

let numb;

while (somma <= 50) {

    numb = Number(prompt("Inserisci un numero"));

    numberS.push(numb)

    somma += numb;

}

document.getElementById("somma").innerHTML = somma;