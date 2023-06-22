var array = ['June 21 2023', 'A very special day', 'It is your birthday'];
let index = 0;


document.addEventListener("DOMContentLoaded", function(){
    var array = ['June 21 2023', 'Today is a very special day', 'It is your birthday', 'A very quiet, patient and kind brother', 'You are one of the best brothers anyone could ask for', 'So A Very Special Happy Birthday to you, Carlo!' ];
    let start = 0;
    var sentenceChanger = setInterval(function() {
        var target = document.querySelector('p.sentences');
        if(start === 1) {
            var imgSecondTarget = document.querySelector('img.two');
            imgSecondTarget.style.visibility = 'visible';
            var titleTarget = document.querySelector('h1.title');
            titleTarget.style.transition = '3s';
            titleTarget.style.opacity = 0;

        }
        if(start === 2) {
            var imgSecondTarget = document.querySelector('img.two');
            imgSecondTarget.src = './bday-assets/brother_IMG_5588.jpg';
        }
        if(start === 3) {
            var imgSecondTarget = document.querySelector('img.two');
            imgSecondTarget.src = './bday-assets/fam-pic-1.jpg';
        }
        if(start === array.length) {
            clearInterval(sentenceChanger);
            console.log('interval complete');
            var target = document.querySelector('p.sentences');
            target.innerHTML = 'June 21 2023';
            var titleTarget = document.querySelector('h1.title');
            titleTarget.innerHTML = 'A Very Special Happy Birthday To You CARLO!!!';
            titleTarget.style.opacity = 1;
            var imgFirstTarget = document.querySelector('img.one');
            var imgSecondTarget = document.querySelector('img.two');
            imgSecondTarget.style.visibility = 'visible';
            var imgThirdTarget = document.querySelector('img.three');
            imgThirdTarget.style.visibility = 'visible';
        
        }
        console.log('start is', start);
        target.textContent = array[start++];
    }, 3000);
});






// var array = ['June 21 2023', 'A very special day', 'It is your birthday'];
// let start = 0;
// var sentenceChanger = setInterval(function() {
//     var target = document.querySelector('p.sentences');
//     if(index === array.length) {
//         clearInterval(sentenceChanger);
//         console.log('interval complete');
//     }
//     console.log('array[start++] is', start[index++]);
//     target.textContent = array[start++]
// }, 1300);


// var array = ['June 21 2023', 'A very special day', 'It is your birthday'];
// let start = 0;
// var sentenceChanger = setInterval(function() {
//     var target = document.querySelector('p.sentences');
//     if(start === array.length) {
//         clearInterval(sentenceChanger);
//         console.log('interval complete');
//     }
//     target.textContent = array[start++]
// }, 1300);

// var array = ['June 21 2023', 'A very special day', 'It is your birthday'];
// let start = 0;
// var sentenceChanger = setInterval(function() {
//     var target = document.querySelector('p.sentences');
//     if(start === array.length) {
//         clearInterval(sentenceChanger);
//         console.log('interval complete');
//         var newTarget = document.querySelector('h1.title');
//         newTarget.innerHTML = 'Happy Birthday To You, Dear Brother CARLO';
//         var imgFirstTarget = document.querySelector('img.one');
//         imgFirstTarget.src = "./test-assets/fam-pic-1.jpg";
//         var imgSecondTarget = document.querySelector('img.two');
//         imgSecondTarget.style.visibility = 'visible';
//     }
//     target.textContent = array[start++]
// }, 3000);


  