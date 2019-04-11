document.write("this is being written from a document.write script");

function verifyFunction(){
  var start = prompt("what is the number");
  if(start == "90210"){
    document.getElementById("here").innerHTML = "account verified"
  } else {
    alert("account not verified");
  }
}

// $(document).ready(function(){
//   $("#tab").pagination({
//     items: 5, 
//     contents: 'contents',
//     previous: 'Previous',
//     next: 'Next',
//     position: 'bottom',
//   })
// })



// function onloadFunction(){
//   alert("This is the very first function and also functions first, when the document loads!");
//   document.getElementById("here").innerHTML = "this is being written from a document.getElementById script"
// }

// function questionFunction(){

//   var question = prompt("what is your name?");

//   if(question == "Marco"){
//     alert("Great, you are on your way to some great JavaScript developer skills!")
//   } else if(question == "Mark"){
//     alert("Still on the way to great JavaScript developer skills!")
//   } else {
//     alert("name not recognized yet")
//   }

// }

function keypressFunction(){
  document.getElementById("jumbojet").style = "background-color: yellow;"
}

$("#showButton").click(function(){
  $("#anime1").show("slow"); // this "slow" can be replaced with integers, e.g., 3000
    return false;
})

$("#hideButton").click(function(){
  $("#anime1").hide("slow"); // this "slow" can be replaced with integers, e.g., 3000
  return false;
});

$("#showHerButton").click(function(){
  $("#prettygirl").show("slow");
  return false;
})



$("#theform").submit(function(e){
  if ($("#theinput").val() == "prettygirl" ){
     $("#prettygirl").hide("slow");
      e.preventDefault();
  } else {
    alert("incorect answer")
    e.preventDefault();
  }
})


// $("#theform").submit(function(e){
//   if( $("#theform").val() == "prettygirl"){
//     $("#prettygirl").hide("slow");
//     alert("pretty girl script has run");
//     e.preventDefault(); 
//     return;
//   } else {
//     alert("incorrect answer");
//     e.preventDefault(); 
//   }
// })

function getter(){
  var root = 'https://jsonplaceholder.typicode.com';
  $.ajax({
    url: root + '/posts/1',
    method: 'GET'
  }).then(function(data){
   var yay = "the following is JSON data:" + " " + (data.body);
   document.getElementById("apiSection").innerHTML = yay;
  })
}


function newStartFunction(){
  var start = prompt("which Tekken character would you choose to show up?");
  if(start == "Kazuya"){
    // document.getElementById("Kazuya").style.visibility = "visible";
    document.getElementById("Kazuya").classList.add('newClass');

  } else if(start == "Lee" || start == "Violet"){
    document.getElementById("Lee").classList.add('newClass');
  }
}

function apiGetter(){ // haha nice I am getting some of it!
  var root = "http://www.omdbapi.com/?t=";
  var theValue = document.getElementById("testInput").value; // line of test code here
  // var root = "http://www.omdbapi.com/?t=vanilla+sky&apikey=43e240f9";
  // var root = "https://jsonplaceholder.typicode.com";
  var rootApiKey = "&apikey=43e240f9";
  $.ajax({
    // url: "https://www.omdbapi.com/?&apikey=43e240f9&t=vanilla+sky",
    // url: "https://www.omdbapi.com/?&apikey=43e240f9&t=blade+runner+2049",
    url: root + theValue + rootApiKey,
    method: 'GET'
  }).then(function(data){
    var yay = ("Title:" + " "+ data.Title + ". " + "Starring :" + " " + data.Actors);
    document.getElementById("theInputDiv").innerHTML = yay;
    document.getElementById("theInputDiv").classList.add('newClass');
    // alert("the script has worked here");
  })
}

// function apiGetter(){
  // var root = "http://www.omdbapi.com/?t=vanilla+sky&apikey=43e240f9";
  // var root = "https://jsonplaceholder.typicode.com";
//   $.when(
//     $.ajax({
//       url: "https://www.omdbapi.com/?&apikey=43e240f9&t=blade+runner+2049",
//       method: 'GET'
//     }),
//     $.ajax({
//       url: "https://www.omdbapi.com/?&apikey=43e240f9&t=vanilla+sky",
//       method: 'GET'
//     })
//   ).then(function(data){
//       var yay = ("Title:" + " "+ data.Title + ". " + "Starring :" + " " + data.Actors);
//       document.getElementById("theInputDiv").innerHTML = yay;
//       document.getElementById("theInputDiv").classList.add('newClass');
//       alert("the script has worked here");
//     })
// }

function testInputFunction(){
  var theValue = document.getElementById("testInput").value;
  alert(theValue);
}

$("#inputForm").submit(function(e){
  alert("the submit function has worked!");
  e.preventDefault();
})

function traditionalFunction(){
  alert('this is working from the traditional function syntax');
}


let newFunction = () => {
  alert('this is working from the new ES6 function syntax!');
}

let newFunctionCalculator = () => {
    let x = 15000;
    let y = 300;
    let z = 39;
    let question = prompt("what coin do you want to look up in price?");
    if(question == "bitcoin"){
      alert(x * 1);
    } else if(question == "litecoin"){
      alert(y *1);
    } else if (question == "ppt"){
      alert(z * 1);
    }
  }


  var cars = [
    {
      brand: "Acura",
      model: "TSX"
    },
    {
      brand: "Infiniti",
      model: "G35"
    },
    {
      brand: "Lexus",
      model: "IS-F"
    }
  ]

  function looper(){
    // for(var i = 0; i < cars.length; i++){
    //   console.log("the looper has triggered");
    //   var theList = (cars[i].brand + " " + cars[i].model);
    //   document.getElementById("loopAreaHeading").innerHTML = theList;
    // console.log(cars[0].brand + " " + cars[0].model);
    // var theList = (cars[0].brand + " " + cars[0].model);
    // console.log("this is theList", theList);
    // document.getElementById("loopAreaHeading").innerHTML = theList;

    // for(var i = 0; i < cars.length; i++){
    //   console.log(cars[i].brand + " " + cars[i].model);
    //   var theList = (cars[i].brand + " " + cars[i].model);
    //   document.getElementById("loopAreaHeading").innerHTML = theList;
    // }

    var theQuote = "this should take more width, but how come when I loop through the cars array, it only renders the first object???";
    document.getElementById("loopAreaHeading").innerHTML = theQuote;

    }


    // var table = '';
    // var rows = 2;
    // var cols = 3;

    // function tableLooper() {
    //   alert('tableLooper triggered');
    //   for(var r = 0; r < rows; r++ ) {
    //     table += '<tr>';
    //       for(var c = 0; c < cols; c++){
    //         table += '<td>' + c + '</td>';
    //       }
    //     table += '</tr>';
    //   }
    //   document.write('<table>' + table + '</table>');
    // }


    var table = '';
    var rows = 2;
    var cols = 3;

    function tableLooper() {
      alert('tableLooper triggered');
      for(var r = 0; r < rows; r++ ) {
        table += '<tr>';
          for(var c = 0; c < cols; c++){
            table += '<td>' + c + '</td>';
          }
        table += '</tr>';
      }
      document.getElementById("theTable").innerHTML = "transforming.";
    }

    // function pathDetector() {
    //   alert('the current path of this page is: ' + window.location.pathname);
    // }

   // setTimeout(function(){
   //  alert('this triggers 3 seconds later')
   // }, 3000);

   //  setTimeout(function(){
   //  function pathDetector() {
   //    alert('the current path of this page is:' + window.location.pathname);
   //  } pathDetector();
   // }, 3000);

    // pagination

    // addition for gaugeSection
    var gaugeArray = [];
    function looperAdder(){
      gaugeArray.push('+');
      document.getElementsByClassName("addPlace")[0].innerHTML = gaugeArray;
      console.log(gaugeArray);
      if (gaugeArray.length >= 5) {
        document.getElementsByClassName("letterColor")[0].style.color = "orange";
        document.getElementsByClassName("gaugeMeter")[0].style.backgroundColor = "yellow";
        document.getElementsByClassName("gaugeMeter2")[0].style.visibility = "visible";
      } 
      if (gaugeArray.length >= 10) {
        document.getElementsByClassName("letterColor")[0].style.color = "red";
        document.getElementsByClassName("gaugeMeter")[0].style.backgroundColor = "red";
        document.getElementsByClassName("gaugeMeter2")[0].style.backgroundColor = "red";
        document.getElementsByClassName("gaugeMeter3")[0].style.visibility = "visible";
      }
    }

    function looperReducer(){
      gaugeArray.pop('+');
      document.getElementsByClassName("addPlace")[0].innerHTML = gaugeArray;
      if (gaugeArray.length < 5) {
        document.getElementsByClassName("letterColor")[0].style.color = "blue";
        document.getElementsByClassName("gaugeMeter")[0].style.backgroundColor = "blue";
      } 
      if (gaugeArray.length <=5) {
        document.getElementsByClassName("letterColor")[0].style.color = "blue";
        document.getElementsByClassName("gaugeMeter")[0].style.backgroundColor = "blue";
        document.getElementsByClassName("gaugeMeter2")[0].style.visibility = "hidden";
      } 
      if (gaugeArray.length <=10 && gaugeArray.length >5) {
        document.getElementsByClassName("letterColor")[0].style.color = "yellow";
        document.getElementsByClassName("gaugeMeter")[0].style.backgroundColor = "yellow";
        document.getElementsByClassName("gaugeMeter2")[0].style.backgroundColor = "yellow";
        document.getElementsByClassName("gaugeMeter3")[0].style.visibility = "hidden";
      }
    }

// tickerAPIArea
function apiGetterIEX(){ // haha nice I am getting some of it!
  alert('apiGetterIEX function triggered');
  $.ajax({
    // url: "https://www.omdbapi.com/?&apikey=43e240f9&t=vanilla+sky",
    // url: "https://www.omdbapi.com/?&apikey=43e240f9&t=blade+runner+2049",
    url: "/stock/aapl/batch?types=quote,news,chart&range=1m&last=1",
    method: 'GET'
  }).then(function(data){
    var yay = data.symbol;
    document.getElementById("actualTickerArea").innerHTML = yay;
    // alert("the script has worked here");
  })
}

// calculatorArea
array = [];

function arrayContains(){
  console.log(array);
  document.getElementById('screenText').innerHTML = array.toString();
}

function addFunction(){
  console.log('addFunction has been triggered');
  array.push('+');
};

function subtractFunction(){
  console.log('subtractFunction has been triggered');
  array.pop('+')
};

function submitFunction(value){
  console.log('submitFunction triggered, the value is', value);
  var theValue = document.getElementById('inputId').value;
  console.log('now the value is:', theValue);
  document.getElementById('screenText').innerHTML = array + theValue;
}

function summer(){
  // var totalValue = document.getElementById('screenText').textContent; // use textContent because this is getting the value of an h tag
  // console.log('the totalValue is:', totalValue);
  // firstInputIdVal = document.getElementById('firstInputId').value;
  // secondInputIdVal = document.getElementById('secondInputId').value;
  // console.log('sum function has just been triggered');
  // console.log('the value of the firstInputId is', firstInputIdVal);
  // console.log('the value of the secondInputId is', secondInputIdVal);
  // if(isNaN(firstInputIdVal) && isNaN(secondInputIdVal)) {
  //   console.log('string');
  //   summerVal = firstInputIdVal + secondInputIdVal;
  //   console.log('the total Value of the Strings are:', summerVal);
  //   document.getElementById('calcDisplayArea').style.backgroundColor = 'orange';
  //   document.getElementById('calcDisplayArea').innerHTML = summerVal;
  // } else {
  //   console.log('integer');
  //   summerVal = +firstInputIdVal + +secondInputIdVal;
  //   console.log('the total Value of the Integers are:', summerVal);
  //   document.getElementById('calcDisplayArea').style.backgroundColor = 'blue';
  //   document.getElementById('calcDisplayArea').innerHTML = summerVal;
  // }
  // console.log('now the total Value is:', summerVal);
      document.getElementById('calcDisplayArea').style.backgroundColor = 'deepskyblue';
      // document.getElementById('calcDisplayArea').innerHTML = summerVal;
      document.getElementById('calcDisplayAreaValueArea').innerHTML = summerVal;
}

function addButtonFunc(){
  console.log('add button has been pressed and addButtonFunc has been triggered');
  firstInputIdVal = document.getElementById('firstInputId').value;
  secondInputIdVal = document.getElementById('secondInputId').value;
  if(isNaN(firstInputIdVal) && isNaN(secondInputIdVal)) {
    console.log('the values being added are strings and will not be added');
  }
  else {
    console.log('the values are integers and will be added');
    summerVal = +firstInputIdVal + +secondInputIdVal;
    // document.getElementById('calcDisplayArea').style.backgroundColor = 'orange';
    // document.getElementById('calcDisplayArea').innerHTML = summerVal;
    return summerVal;
  }
}

function subtractButtonFunc(){
  console.log('subtract button has been pressed and subtractButtonFunc has been triggered');
  firstInputIdVal = document.getElementById('firstInputId').value;
  secondInputIdVal = document.getElementById('secondInputId').value;
  if(isNaN(firstInputIdVal) && isNaN(secondInputIdVal)) {
    console.log('the values being subtracted are string and will not be subtracted');
  }
  else {
    console.log('the values are integers and will be subtracted');
    summerVal = firstInputIdVal - secondInputIdVal;
    return summerVal;
  }
}

function multiplyButtonFunc() {
  console.log('mutiplication button has been pressed');
  firstInputIdVal = document.getElementById('firstInputId').value;
  secondInputIdVal = document.getElementById('secondInputId').value;
  if(isNaN(firstInputIdVal) && isNaN(secondInputIdVal)) {
    console.log('the values being being multiplied are strings and will not be multiplied');
  }
  else {
    console.log('the values are integers and will be multipled');
    summerVal = firstInputIdVal * secondInputIdVal;
    return summerVal;
  }
}

function divideButtonFunc() {
  console.log('divison button has been pressed');
  firstInputIdVal = document.getElementById('firstInputId').value;
  secondInputIdVal = document.getElementById('secondInputId').value;
  if(isNaN(firstInputIdVal) && isNaN(secondInputIdVal)) {
    console.log('the values being being divided are strings and will not be divided');
  }
  else {
    console.log('the values are integers and will be divided');
    summerVal = firstInputIdVal / secondInputIdVal;
    return summerVal;
  }
}



/////////////////////////////////////////////////////////////////////
/////////
// function getSum(total, num) {
//     return total + num;
// }
// function myFunction(array) {
//   console.log('myFunction has just been triggered');
//     document.getElementById("demo").innerHTML = numbers.reduce(getSum);
// }

///////////////////////////////////////////////////////////////////
function extensiveElementAggregator() {
  var elemental = document.querySelector('.extensive')
  console.log('the elemental variable is:', elemental);
  var aggregate = elemental.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, input, h1, img');
  console.log('the aggregate is', aggregate);
  // elemental.style.backgroundColor = 'orange';
}

setTimeout(function(){
  console.log('extensiveElementAggregator function now triggering from setTimeout');
  extensiveElementAggregator();
}, 5000);


function loadFunc(){
  alert('this script is ran onload and is invoked from the actual html body');
}

function onloadFunc() {
  document.addEventListener('keydown', this.keyBoardUserDetect);
  console.log('onloadFunc invoked and is actively adding eventListener keyBoardUserDetect');
  document.addEventListener('keydown', this.activeElementDetect);
}

function keyBoardUserDetect(e) {
  $('body').addClass('keyBoardFocus');
  console.log('keyBoardUserDetect triggered');
  window.removeEventListener('keydown', this.keyBoardUserDetect);
;}

function activeElementDetect(e){
  if (e.keyCode === 9) {
    console.log('tab keypress detected, will now be listenting to detect current element that is actively being focused on');
    console.log('the current active Element is:', document.activeElement);
  }
}

// function selfInvokingLoop() {
//   console.log('selfInvokingLoop is being invoked');
//   var repeat = setTimeout(selfInvokingLoop, 10000);
// }

// selfInvokingLoop();

function pageDetector(){
  if (window.location.pathname == '/page2.html') {
    alert('page detector has detected that you are on page 2')
  };
  return console.log('the current page is', window.location.pathname);
}

pageDetector();

// function tickerFunc(){
//   var root = 'https://jsonplaceholder.typicode.com';
//   $.ajax({
//     url: root + '/posts/1',
//     method: 'GET'
//   }).then(function(data){
//    var yay = "the following is JSON data:" + " " + (data.body);
//    document.getElementById("apiSection").innerHTML = yay;
//   })
// }

// important: API key for stock ticker data from AlphaVantage is OL0YECBOH3ZI7R8W
// important: API key for stock ticker data from AlphaVantage is OL0YECBOH3ZI7R8W
// important: API key for stock ticker data from AlphaVantage is OL0YECBOH3ZI7R8W


function tickerFunc(){
  console.log('the tickerFunc has triggered');
  var root = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=DJIA&apikey=OL0YECBOH3ZI7R8W'
  // var root = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJIA&interval=5min&apikey=OL0YECBOH3ZI7R8W';
  $.ajax({
    url: root,
    method: 'GET'
  }).then(function(data){
    var yay = (JSON.stringify(data));
    var arrayData = yay[0] + yay[2] + yay[3] + yay[4] + yay[5] + yay[6] + yay[7] + yay[8] + yay[9] + yay[10];
    var proper = yay[0];
    console.log('yay.GlobalQuote', yay.GlobalQuote);

    // function loopedArrayData() {
    //   for(var i = 0; i < 5; i++ ) {
    //   console.log('from loopedArrayData', arrayData[i])
    //   var result = arrayData[i];
    //   };
    // }
    // loopedArrayData();

    // var yay2 = yay[2] + yay[3] + yay[4] + yay[5];
    // var yay = data;
    // var yay2 = JSON.stringify(yay);
    // var yay3 = JSON.stringify(yay2);
    // console.log('data', data);
    // console.log('yay2', yay2);
    // console.log('yay2', yay2);

    document.getElementById('ticker').innerHTML = yay;
    // document.getElementById('ticker').innerHTML = proper;
    // document.getElementById('ticker').innerHTML = arrayData;
    // document.getElementById('ticker').innerHTML = result;
    // document.getElementById('ticker').innerHTML = yay2[11] + yay2[12] +yay2[13] + yay2[14] + yay2[15] + yay2[16] +yay2[17] + yay2[18];
    // var parsed = JSON.parse(data);
    // var usableparsed = parsed[0];
    // console.log('usableparsed', usableparsed);
    // document.getElementById('ticker').innerHTML = usableparsed;
    console.log('ticker func through to completion');
  })
}

function removeOverlay() {
  // var target = document.getElementsByClassName('passwordProtectOverlay')[0];
  // $(this).addClass('overlay');
  var target = document.getElementsByClassName('overlay')[0];
  $(target).removeClass('overlay');
  console.log('password is incorrect');
}

function press(e){
  console.log('press function triggered, the key that was just pressed is:', e.target.value);
}

function checkPassword() {
  console.log('checkPassword triggered');
  var password = document.getElementById('passwordInputForPasswordProtect').value;
  console.log('the password entered is:', password);
  if (password === 'thePassword') {
    console.log('checkPassword completed');
    this.removeOverlay();
    document.getElementById('passwordInputForPasswordProtect').value = '';
    return console.log('input should be cleared');
  }
  console.log('checkPassword completed, password is incorrect');
  document.getElementById('passwordInputForPasswordProtect').value = '';
  document.getElementsByClassName('overlayMessageArea')[0].innerHTML = 'Password Entered Was Incorrect, Please Enter Correct Password';
}

var resultArray = [];

function itemPopulatorFunction() {
  console.log('itemPopulatorFunction triggered');
  var value = document.getElementById('itemPopulatorInput').value;
  console.log('the value is:', value);
  console.log('the resultArray is', resultArray);
  resultArray.push(value);
  var target = document.getElementsByClassName('itemPopulatorResult')[0].innerHTML = resultArray;
}

function enterFunction(event) {
  if (event.keyCode === 13) {
    this.itemPopulatorFunction();
    console.log('now, the input value will also be cleared by resetting its value to something empty');
    document.getElementById('itemPopulatorInput').value = '';
  }
}

// function enterUtils(event) {
//   if (event.keyCode === 13) {
//     console.log('enter key pressed');
//     var targetValue = document.getElementById('utilsInput').value;
//     console.log('the current enterUtils value is:', targetValue);
//     document.getElementById('utilsInput').value = '';
//   }
// }

// import firstUtils from './utils.js';

// this.utils = firstUtils();

function firstStageHelper(event){
  if(event.keyCode === 13) {
    console.log('firstStageHelper function triggered');
    var originalValue = document.getElementById('helperInput').value;
    this.transformerFunction(originalValue);
    document.getElementById('helperInput').value = '';
  }
}

function transformerFunction(originalValue){
  console.log('transformerFunction also triggered, and now value will have additional 5');
  var transformedValue = originalValue * 5;
  console.log('transformedValue is', transformedValue);
  if (transformedValue !== isNaN) {
    document.getElementsByClassName('helperAreaDisplay')[0].innerHTML = transformedValue;
  }
  if (transformedValue === isNaN){
    document.getElementsByClassName('helperAreaDisplay')[0].innerHTML = 'result is not valid';
  }
}

var looperArray = [];
function looperHelper(event) { // still needs to be worked on 
  if (event.keyCode === 13) {
    console.log('looperHelper triggered');
    var originalValue = document.getElementById('looperInput').value;
    looperArray.push(originalValue);
    document.getElementById('looperInput').value = '';
    document.getElementById('looperItemAggregateArea').innerHTML = looperArray;
    window.looperArray = looperArray;
  }
}

var result = '';
function looperFunction() {
  for(var i = 0; i < looperArray.length; i ++) {
    console.log(looperArray[i]);
    // var result = looperArray[i];
    var mapped = looperArray.map(function(o, i){
      var mapRefined = JSON.stringify(o);
      window.mapRefined = mapRefined;
      return mapRefined;
    });
  }
  window.result = result;
  window.mapped = mapped;

}

function looperDisplayFunc(){
  console.log('looperDisplayFunc triggered');
  console.log('testFunc to see if RESULT logs', result);
  document.getElementsByClassName('looperDisplay')[0].innerHTML = mapped;
  console.log('mapRefined:', mapRefined);
}

var sampleArray = ['Silver', 'Gold', 'Bitcoin'];

function loopWay() {
  console.log('loopWay');
  for(var i = 0; i < sampleArray.length; i++) {
    console.log('sampleArray[i]', sampleArray[i]);
  }
}

function mapWay() {
  console.log('mapWay');
  sampleArray.map(function(o, i){
    return console.log('o', {o})
  })
}

function remover() {
  console.log('remover function triggered');
  var target = document.getElementById('looperInput');
  target.remove();
}

// setTimeout(function(){
//   console.log('MAPPED', mapped);
//   document.getElementsByClassName('looperDisplay')[0].innerHTML = mapped;
// }, 10000);



// code below is separate logic
 
// if ('.icon-callout-cta') {
//   function trigger(e) {
//     if(e.keyCode === 13) {
//       e.target.click();
//     }
//   }
//   var targets = document.getElementsByClassName('icon-callout-cta');
//   function distributor() {
//     for(var i = 0; i < target.length; i++) {
//       targets[i].setAttribute('tabindex', '0');
//       targets[i].addEventListener('keypress', trigger, false);
//       targets[i].addEventListener('focusin', function(){
//         this.style.outline = 'dotted black 1px';
//       });
//       targets[i].addEventListener('focusout', function(){
//         this.style.outline = '';
//       })
//     }
//   }
//   var secondaryTargets = document.querySelectorAll('div.col-12.col-sm-3 > a');
//   function focusRemover() {
//     for(var i = 0; i < secondaryTargets.length; i++) {
//       secondaryTargets[i].setAttribute('tabindex', '-1');
//     }
//   }
//   focusRemover();
// }

// code above is separate logic

function coinDeskBitcoinPriceAPIGetter(){ // haha nice I am getting some of it!
  console.log('coinDeskBitcoinPrice triggered every minute');
  $.ajax({
    // url: "https://www.omdbapi.com/?&apikey=43e240f9&t=vanilla+sky",
    // url: "https://www.omdbapi.com/?&apikey=43e240f9&t=blade+runner+2049",
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    method: 'GET'
  }).then(function(data){
    // var yay = data;
    console.log('data:', data);
    var grouped = data[372] + data[373] + data[374] + data[375] + data[376] + data[377] + data[378];
    console.log('grouped', grouped);
    var message =  "$" + grouped;
    console.log('message', message);
    var target = document.getElementsByClassName('bitcoinFiatPrice')[0];
    target.innerHTML = message;
    // document.getElementById("actualTickerArea").innerHTML = yay;
    // alert("the script has worked here");
  })
}

function coinDeskTimedTrigger() {
  console.log('coinDeskTimedTrigger triggered');
  coinDeskBitcoinPriceAPIGetter();
  setTimeout(function(){
    coinDeskTimedTrigger();
    attributeDistributor();
  }, 120000);
}

coinDeskTimedTrigger();

function attributeDistributor() {
  console.log('attributeDistributor triggered');
  // note the difference between 'document.querySelector' and 'document.querySelectoAll'
  // where in one, it's okay to manipulate straight and right away, while the other needs to be looped through before able to be manipuated or use methods on
  var targets = document.querySelector('div.container > p > span > a');
  targets.style.backgroundColor = "blue";
  var targetz = document.querySelectorAll('div.container > div.row > div.col-md-6 > h3');
  for (var i = 0; i < targetz.length; i++) {
    targetz[i].style.color = 'blue';
  }
}

function JSONDisplayTrigger() {
  console.log('JSONDisplayTrigger triggered');
  var object = {
    one: 'first object, a gift',
    two: 'second object, a second gift',
    three: 'third object, a third gift',
  }
  var objectData = object.one;
  var target = document.getElementsByClassName('JSONdisplay')[0].innerHTML = objectData;
}

window.Utils = (function () {
  return {
    firstFunc: function(n) { console.log('firstFunc triggered from utils!', n*3) },
    secondFunc: function() { alert('secondFunc triggered from Utils!') }
  }
}());

// to use the Utils functions, the syntax is:    Utils.firstFunc(); or Utils.secondFunc();
// to use the Utils functions for calculations, the syntax is: Utils.firstFunc(n) where 'n' is a number 


Utils.firstFunc(5);

//dataAggregatorCentralDisplay section

function fullDataAggregatorForCentralDisplay() { // it's currently adding the values as strings, might need to use parseInt() to actually add the integers
  console.log('fullDataAggregatorForCentralDisplay triggered');
  var firstSum = document.getElementById('dataAggregatorInputOne').value;
  var secondSum = document.getElementById('dataAggregatorInputTwo').value;
  var thirdSum = document.getElementById('dataAggregatorInputThree').value;
  var mainSum = document.getElementById('mainDataAggregatorInput').value;

  var total = firstSum + secondSum + thirdSum + mainSum;
  console.log('TOTAL IS', total);

}

fullDataAggregatorForCentralDisplay();

// for loader
function loaderTimedTrigger() {
  setTimeout(function(){
    var target = document.getElementsByClassName('loader')[0];
    target.classList.add('loaderSectionHide');
  }, 2000);
}

loaderTimedTrigger();

// D3.JS testing run area
d3.selectAll('h1').style('color', 'red');








