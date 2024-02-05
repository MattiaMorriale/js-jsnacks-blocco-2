let arr1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

let arr2 = ['1', '2', '3', '4', '5']

let number;

while (arr2.length < arr1.length) {

    number = prompt("Inserisci un numero")

    arr2.push(number);

}

document.getElementById("arr-1").innerHTML = arr1;

document.getElementById("arr-2").innerHTML = arr2;