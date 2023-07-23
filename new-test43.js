var array = ['June 21 2023', 'A very special day', 'It is your birthday'];
let index = 0;


document.addEventListener("DOMContentLoaded", function(){
    var array = ['July 25 2023', 'Today is a very special day', 'It is your birthday', 'A very quiet and kind brother', 'You are also one of the best brothers anyone could ask for', 'So A Very Special Happy Birthday to you, Angelo (Gel-Gelz)!' ];
    let start = 0;
    var sentenceChanger = setInterval(function() {
        var target = document.querySelector('p.sentences');
        var images = document.querySelectorAll('img');
        for(var i = 0; i < images.length; i++) {
            images[i].style.transition = '1s';
        }
        if(start === 0) {
            var imgFirstTarget = document.querySelector('img.one');
            imgFirstTarget.style.opacity = 1;
            var imgSecondTarget = document.querySelector('img.two');
            imgSecondTarget.style.visibility = 'visible';
            var titleTarget = document.querySelector('h1.title');
            titleTarget.style.opacity = 0;
            imgSecondTarget.style.opacity = 1;
            setTimeout(function(){
                var imgSecondTarget = document.querySelector('img.two');
                imgSecondTarget.style.opacity = 1;
            }, 2000);

        }
        if(start === 1) {
            setTimeout(function(){
                var imgThirdTarget = document.querySelector('img.three');
                imgThirdTarget.style.opacity = '1';
            }, 2000);
        }
        if(start === 2) {
            setTimeout(function(){
                var imgFourthTarget = document.querySelector('img.four');
                imgFourthTarget.style.opacity = '1';
            }, 2000);
        }
        if(start === array.length) {
            clearInterval(sentenceChanger);
            console.log('interval complete');
            console.log('target.innerHTML triggered');
            var titleTarget = document.querySelector('h1.title');
            titleTarget.innerHTML = 'A Very Special Happy Birthday To You ANGELO!!!';
            titleTarget.style.opacity = 1;
            var imgSecondTarget = document.querySelector('img.two');
            imgSecondTarget.style.visibility = 'visible';
            imgSecondTarget.style.opacity = 1;
            var imgThirdTarget = document.querySelector('img.three');
            imgThirdTarget.style.visibility = 'visible';
            setTimeout(function(){
                console.log('completion sTo triggered');
                var target = document.querySelector('p.sentences');
                target.style.transition = '3s';
                target.style.marginTop = '280px';
                setTimeout(function(){
                    target.style.marginTop = '0px';
                    target.innerHTML = 'Love: your older brother Mark, and the rest of the family.';
                    console.log('target is', target);
                }, 2000);
            }, 1500);
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
  