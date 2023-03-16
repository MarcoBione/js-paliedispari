
//---------------------PALINDROME GAME---------------------

const btnCheckWord = document.getElementById('checkUserWord');
btnCheckWord.addEventListener('click', palindromeGame);


function palindromeGame(){

    let result = document.createElement('p');

    //load userWord value
    let userWord = document.querySelector('input').value;
    //check evenOdd
    console.log(userWord);

    //convert userWord to "array"
    let userSplitted = userWord.split('');
    console.log(userSplitted);

    //invert userWord
    let userWordInvert = userSplitted.reverse();
    console.log(userWordInvert);

    let userWordJoint = userWordInvert.join('');
    console.log(userWordJoint);

    if(userWord == userWordJoint){
        result.innerText = `${userWord} è palindroma`;
        result.classList.add('text-success');
        console.log(result);
        document.getElementById('wordCheck').appendChild(result);
        console.log('non lo e');
        console.log('palindorma');
    }else{
        result.innerText = `${userWord} non è palindroma`;
        result.classList.add('text-danger');
        console.log(result);
        document.getElementById('wordCheck').appendChild(result);
        console.log('non lo e');
    }
}