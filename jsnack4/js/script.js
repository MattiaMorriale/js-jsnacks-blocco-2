let numbers;

let somma = 0;


numbers = prompt("Inserisci un numero a 4 cifre");
    
if (numbers.length != 4 && !isNaN(numbers)) {
    
    document.getElementById("totale").innerHTML = ("non è un numero a 4 cifre");

} else {

    for(let i = 0; i < numbers.length; i++ ) {

        somma += +numbers[i];

    } 

}

document.getElementById("totale").innerHTML = somma;


