// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let isNumber = false;

let userNumber;
let risposta = "";

do{

    risposta = prompt("Inserisci un numero oppure scrivi 'Esci' ");
    userNumber = Number(risposta);
    
    if (isNaN(userNumber)) {

        if (risposta == "Esci") {

            isNumber = true;

        } else {

            isNumber = false;

            alert("Il valore aggiunto non è un numero, aggiungi un numero.");
            
        }

    
    } else {


        if (userNumber % 2 == 0) {

            document.getElementById("numero1").innerHTML = userNumber;
        
        } else {
        
            userNumber += 1;
        
            document.getElementById("numero2").innerHTML = userNumber;
        
        }

    }

// while (!isNumber)..
} while (isNumber === false); 

