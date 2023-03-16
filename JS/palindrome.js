
//---------------------PALINDROME GAME---------------------

const btnCheckWord = document.getElementById('checkUserWord');
btnCheckWord.addEventListener('click', palindromeGame);


function palindromeGame(){

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
        console.log('palindorma');
    }else{
        console.log('non lo e');
    }
}