let x = Math.floor((Math.random() * 100) + 1);

console.log(x);

let number;

while (number != x) {

    number = Number(prompt("Inserisci un numero"));

    if (number === x) {

        alert("Hai indovinato il numero, Congratulazioni");

    } else if (number < x) {

        alert("Il tuo numero è basso, Riprova");

    } else if (number > x) {

        alert("Il tuo numero è alto, Riprova");

    }


}

document.getElementById("numero").innerHTML = x;