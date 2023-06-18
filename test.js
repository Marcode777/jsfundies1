var array = ['June 21 2023', 'A very special day', 'It is your birthday'];
let index = 0;


document.addEventListener("DOMContentLoaded", function(){
    console.log('this is the script for my page');
    // setTimeout(function(){
    //     var target = document.querySelector('p.sentences');
    //     target.innerHTML = 'June 21 2023';
    // }, 2300);
    var sentenceChanger = setInterval(function() {
        var target = document.querySelector('p.sentences');
        if(index === array.length - 1) {
            clearInterval(sentenceChanger);
        }
        console.log('array[index++] is', array[index++]);
        target.innerHTML = array[index++]
    }, 1300);
});