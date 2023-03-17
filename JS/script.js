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

    let userChoise = 0;
    //load evenOdd value
    userChoise = document.querySelector('input').value;
    //check evenOdd
    console.log(userChoise);

    //generation random number
    let randomNumber = Math.floor((Math.random() * 5) + 1);
    console.log(randomNumber);

    let sum = mySum(userChoise, randomNumber);
    console.log(sum);

    function mySum(a, b) {
      return a + b;         //<--- non mi fa la somma però mette i due numeri uno accanto all'altro.. non capisco come mai
    }
    

    let result = document.createElement('p');

    if((sum % 2 === 0 && evenOdd === 'even') || (sum % 3 === 0 && evenOdd === 'odd')){ //da chiedere domani
        result.innerText = `Numero estratto: ${sum} - Hai vinto!`;
        result.classList.add('text-success');
        console.log(result);
        document.getElementById('results').appendChild(result);

    }else if (evenOdd == ''){
        result.innerText = `Seleziona un opzione per poter giocare!`;
        result.classList.add('text-warning');
        console.log(result);
        document.getElementById('results').appendChild(result);
    }else{
        result.innerText = `Numero estratto: ${sum} - Ritenta, sarai piu fortunato la prossima volta`;
        result.classList.add('text-danger');
        console.log(result);
        document.getElementById('results').appendChild(result);
    };


};
