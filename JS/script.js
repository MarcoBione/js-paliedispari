/*
EXERCISE SPECS:

Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno:
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

*/


//---------------------EVEN ODD GAME---------------------

const btnEvenOdd = document.getElementById('checkEvenOdd');
btnEvenOdd.addEventListener('click', evenOddGame);


function evenOddGame(){
    //load evenOdd value
    let evenOdd = document.querySelector('select').value;
    //check evenOdd
    console.log(evenOdd);

    //generation random number
    let randomNumber = Math.floor((Math.random() * 5) + 1);
    console.log(randomNumber);

    let result = document.createElement('p');

    if((randomNumber % 2 === 0 && evenOdd === 'even') || (randomNumber % 3 === 0 && evenOdd === 'odd')){
        result.innerText = `Numero estratto: ${randomNumber} - Hai vinto!`;
        result.classList.add('text-success');
        console.log(result);
        document.getElementById('results').appendChild(result);

    }else if (evenOdd == ''){
        result.innerText = `Seleziona un opzione per poter giocare!`;
        result.classList.add('text-warning');
        console.log(result);
        document.getElementById('results').appendChild(result);
    }else{
        result.innerText = `Numero estratto: ${randomNumber} - Ritenta, sarai piu fortunato la prossima volta`;
        result.classList.add('text-danger');
        console.log(result);
        document.getElementById('results').appendChild(result);
    };


};
