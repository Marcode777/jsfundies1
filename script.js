// document.write("this is being written from a document.write script");

function verifyFunction(){
  var start = prompt("what is the current year");
  if(start == "2022"){
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

//helloWorld
function helloWorld(){
  console.log('helloWorld triggered');
  document.getElementsByClassName('NYC')[0].classList.add('appear');
}

helloWorld();

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

var root = "&apikey";
var Api = "=";
var Key = "43e240f9";

var rootApiKey = root + Api + Key;
console.log('from script.js rootApiKey is:', rootApiKey );

function apiGetter(){ // haha nice I am getting some of it!
  var root = "http://www.omdbapi.com/?t=";
  var theValue = document.getElementById("testInput").value; // line of test code here
  // var root = "http://www.omdbapi.com/?t=vanilla+sky&apikey=43e240f9";
  // var root = "https://jsonplaceholder.typicode.com";
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
      document.getElementById("theTable").innerHTML = "transforming..";
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
    //document.getElementById("actualTickerArea").innerHTML = yay;
    //var target = document.getElementById("actualTickerArea"); test
    //target.style.display = 'none';
     //alert("the script has worked here");
  });
  console.log('****** apiGetter is not functioning for now');
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
  console.log('this script is ran onload and is invoked from the actual html body');
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
    var grouped = data[372] + data[373] + data[374] + data[375] + data[376] + data[377] + data[378] + data[379];
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
  }, 12000);
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

// for iterators and generators
var num = 0;
function outerIterator() {
  function innerIterator() {
    // num *= num++; for incrementing using multiplication
    num++;
    console.log('num', num);
    num = window.num;
    return num;
  }
  innerIterator();
  document.getElementsByClassName('iteratorDisplay')[0].innerHTML = num;
} 


// D3.JS testing run area
d3.selectAll('h1').style('color', 'blue');
d3.select('div.innerD3 > h2').style('color', 'red');
d3.select('div.innerMostD3 > h3').style('color', 'orange');

d3.selectAll('p').style('color', function() {
  return 'hsl(' + Math.random() * 360 + ', 100%, 50%';
}); 





// objectSection
function objectSectionTrigger() {
  var theObject = {
    first: 'https://images.unsplash.com/photo-1542830466-91773113dd3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    second: 'https://cdn.jmbullion.com/wp-content/uploads/2013/09/1-oz-sunshine-silver-bar.jpg',
    third: 'https://360view.hum3d.com/zoom/Tools/Gold_Bar_1000_0001.jpg',
    fourth: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvDbgqeP4MlR_q2JNSYWIWvVqU7g0TOUopza-vQea-irH9hOJcQ',
    fifth: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*qiRzcuyOTM1UjH3dq7SMOA.png&f=1&nofb=1'
  }
  setTimeout(function(){
    console.log('objectSectionTrigger triggered');
    document.getElementById('objectSectionFirstImage').src = theObject.first;
    document.getElementById('objectSectionSecondImage').src = theObject.second;
    document.getElementById('objectSectionThirdImage').src = theObject.third;
    document.getElementById('objectSectionFourthImage').src = theObject.fourth;
    document.getElementById('objectSectionFifthImage').src = theObject.fifth;
      setTimeout(function(){
        console.log('secondary time trigger');
        document.getElementById('objectSectionFirstImage').classList.add('appear');
        setTimeout(function(){
          document.getElementById('objectSectionSecondImage').classList.add('appear');
          setTimeout(function(){
            document.getElementById('objectSectionThirdImage').classList.add('appear');
            setTimeout(function(){
              document.getElementById('objectSectionFourthImage').classList.add('appear');
              setTimeout(function(){
                document.getElementById('objectSectionFifthImage').classList.add('appear');
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
  }, 5000);
}

objectSectionTrigger();

// webCrawlerSection
function pageCrawlerTrigger() {
  console.log('*****webCrawlTrigger*****');
  var targetz = document.querySelectorAll('h3');
  var allLinkz = [];
  function linkDistributor() {
    console.log('linkDistributor inside webCrawlerTrigger, triggered');
    for(var i = 0; i < targetz.length; i++) {
      console.log(targetz[i]);
      allLinkz.push(targetz[i]);
    }
    console.log('allLinkz', allLinkz);
    document.getElementsByClassName('pageCrawlerDisplayOneHeader')[0].innerHTML = allLinkz;
  }
  linkDistributor();
}

// Promise Section
// it seems that the key concepts of promises are that they are similar to event listeners
// however, promises have a feature that event listeners do not have, they are able to wait for information even before the DOM loads
// Also, excitingly, look into JavaScript Async and JavaScript Await
function promiseButtonTrigger() {
  console.log('promiseButtonTrigger triggered');
  setTimeout(function(){
    promiseTrigger();
  }, 3000);
}

function promiseTrigger() {
  console.log('*promiseTriggered');
  var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('kolokoyz');
    }, 1000);
  });

  promise1.then(function(value){
    alert('from PROMISE' + '' + value);
  });
}

function promiseTriggerOne() {
  console.log('promise trigger one triggered');
  var variable = 'still in progress';
  console.log('variable, second try', variable);
  document.getElementsByClassName('promiseSectionDisplay')[0].innerHTML = variable;
  return variable;
}

function searchFunction() {
  console.log('searchFunction triggered');
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('searchUL');
  li = ul.getElementsByTagName('li');
  for(i = 0; i < li.length; i++){
    a = li[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1){
      li[i].style.display = '';
      //document.getElementsByClassName('searchDisplayHeader')[0].innerHTML = li[i].textContent;
    } else {
      li[i].style.display = 'none';
      document.getElementsByClassName('searchDisplayHeader')[0].innerHTML = '';
    }
  }
}

var jsonObject = {
  first: 'firstObject - Alpha!',
  second: 'secondObject - yee hawww Beta!',
  third: 'thirdObject - third time is a charm!'
}

function jsonSelectorOne() {
  console.log('jsonSelector triggered');
  alert(jsonObject.first);
}  

function jsonSelectorTwo() {
  console.log('jsonSelector triggered');
  alert(jsonObject.second);
}

function jsonSelectorThree() {
  console.log('jsonSelector triggered');
  alert(jsonObject.third);
}

function stacker() {
  console.log('stacker triggered');
  //var target = document.querySelector('div.stack-here');
  //target.append('appended value');
  //document.getElementsByClassName('stack-here')[0].append('appended value');
  var item = document.getElementById('stack-input');
  var itemValue = item.value;
  var sampleSyntax = 'sampleSyntax';
  var openingDiv = '<div>';
  var closingDiv = '</div>';
  document.getElementsByClassName('stack-here')[0].append(itemValue + ' ' + sampleSyntax);
  item.value = '';
}

function stackTable() {
  console.log('stackTable triggered');
  //var table = document.querySelector('table#stack-table');
  var table = document.getElementById('stack-table');
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var dataOne = document.getElementById('td-stack-one');
  var dataTwo = document.getElementById('td-stack-two');
  var dataOneValue = dataOne.value;
  var dataTwoValue = dataTwo.value;
  cell1.innerHTML = dataOneValue;
  cell2.innerHTML = dataTwoValue;
  dataOne.value = '';
  dataTwo.value = '';
}

function configDown() {
  console.log('configDown triggered');
  var target = document.getElementsByClassName('arrow-config-section-image')[0];
  target.setAttribute('style', 'transform: rotate(90deg)');
}

function configLeft() {
  console.log('configLeft triggered');
  var target = document.getElementsByClassName('arrow-config-section-image')[0];
  target.setAttribute('style', 'transform: rotate(180deg)');
}

function configRight() {
  console.log('configRight triggered');
  var target = document.getElementsByClassName('arrow-config-section-image')[0];
  target.setAttribute('style', 'transform: rotate(360deg)');
}

function configUp() {
  console.log('configUp triggered');
  var target = document.getElementsByClassName('arrow-config-section-image')[0];
  target.setAttribute('style', 'transform: rotate(270deg)');
}

function htmlLogger() {
  console.log('htmlLogger triggered');
  var target = document.getElementsByClassName('foundation');
  $target = $(target);
  $target.append('<h2 style="color:purple">' + 'built string' + '</h2>');
} 




// for Google Trends API usage, via NPM, from here https://www.npmjs.com/package/google-trends-api
// found out from old notes in server.js file that this can only work on node, so it can only work on server.js file

// setTimeout(function(){

//   console.log('*****found out from old notes in server.js file that this can only work on node, so it can only work on server.js file');
// }, 5500);

// const googleTrends = require('google-trends-api');


// function getTheGoogleTrends() {
//   console.log('getTheGoogleTrends activated');
//   googleTrends.interestOverTime({keyword: 'Women\'s march'})
//     .then(function(results){
//       console.log('These results are awesome', results);
//   })
//   .catch(function(err){
//     console.error('Oh no there was an error', err);
//   });
// } 

// sample code: finally figured out why the event was not being detected, need to use 'keydown' instead of 'keypress'
function trigger(e) {
   console.log('trigger!');
   if(e.keyCode === 81) {
        console.log('Jim Rickards!');
     }
   if(e.keyCode === 80) {
        console.log('P');
     }
}

// document.addEventListener('keydown', trigger, false);
// sample


// notes from working with Curtis Degidio on AJAX request for data to populate JPMC IR Events 
// $.ajax( settings: {
//   url: queryLink,
// }).done(function(results){
//   console.log(results);
// });




// masterpiece section start
// function heightsGrouping() {
//      console.log('heightsGrouping activated');
//      var targets = document.querySelectorAll('h2.dg-profile-name');
//      var heightsContainer = [];
//      for(var i = 0; i < targets.length; i++){
//          var heightCalc = targets[i].clientHeight;
//          heightsContainer.push(heightCalc);
//          console.log('heightsContainer', heightsContainer);
//          window.heightsContainer = heightsContainer;
//      }
//      console.log('final heightsContainer', heightsContainer);
//      var greatestNumber = Math.max(...heightsContainer);
//      var greatestNumberForReal = greatestNumber.toString() + 'px';
//      console.log('greatestNumberForReal is', greatestNumberForReal);
//      console.log('greatestNumber is', greatestNumber);
//      var newTargets = document.querySelectorAll('h2.dg-profile-name');
//      console.log('right before secondary loop, targets', targets);
//      for(var i = 0; i < newTargets.length; i++){
//          console.log('secondary loop triggered');
//          newTargets[i].style.height = greatestNumberForReal;
//      }
// }

// $(document).ready(function(){
//     console.log('document is ready');
//     setTimeout(function(){
//         console.log('timeout triggered');
//         heightsGrouping();
//     }, 5000);
// });

// function heightsGrouping() {
//      console.log('heightsGrouping activated');
//      var targets = document.querySelectorAll('h2.dg-profile-name');
//      var heightsContainer = [];
//      for(var i = 0; i < targets.length; i++){
//          var heightCalc = targets[i].clientHeight;
//          heightsContainer.push(heightCalc);
//          console.log('heightsContainer', heightsContainer);
//          window.heightsContainer = heightsContainer;
//      }
//      console.log('final heightsContainer', heightsContainer);
//      var greatestNumber = Math.max(...heightsContainer);
//      var greatestNumberForReal = greatestNumber.toString() + 'px';
//      console.log('greatestNumberForReal is', greatestNumberForReal);
//      console.log('greatestNumber is', greatestNumber);
//      var newTargets = document.querySelectorAll('h2.dg-profile-name');
//      console.log('right before secondary loop, targets', targets);
//      for(var i = 0; i < newTargets.length; i++){
//          console.log('secondary loop triggered');
//          newTargets[i].style.height = greatestNumberForReal;
//      }
// }

// function imager() {
//      console.log('imager activated');
//      var targets = document.querySelectorAll('img.dg-profile-image');
//      for(var i = 0; i < targets.length; i++) {
//           targets[i].setAttribute('src', '/content/dam/kolokoyfolder/securities/Paulina-Wong.png')
//      }
// }
// masterpiece section finish
   


function populateDataForSorting() {
  console.log('populate data triggered');
  var target = document.getElementsByClassName('sort-area');
  //$target = $(target);
  //$target.append('<h4 style="color: gray">' + 'testTextForSorter' + '</h4>');
}

function sorter() {
  console.log('sorter triggered');
}

function getSortSectionInputValue() {
  console.log('getSortSectionInputValue triggered');
  var value = document.getElementById('sort-section-input').value;
  console.log(value);
}

// sample sorting by date
// var dateArray = [{name: 'M', birthday: new Date('1983-10-22')}, {name: 'C', birthday: new Date('1989-06-21')}, {name: 'A', birthday: '1990-07-25'}]
// var sortedBirthdays = dateArray.sort((a, b) => b.birthday - a.birthday);
// a good resource is this https://stackoverflow.com/questions/10123953/how-to-sort-an-array-by-a-date-property
// another good resource https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values

// Just remember, in plain vanilla JavaScript
//when targeting an element, it can be targeted directly, 
//but when targeting more than 1 element or multiple elements (without giving them classnames using css from the start),
//you must use a loop

 

//sample array sorter
//  var array = ['one', 'two', 'html', 'css', 'javascript'];

//  function iterator() {
//    console.log('iterator triggered');
//    for(var i = 0 ; i < array.length; i++) {
//      console.log('the contents of the array are', array[i]);
//    }
//  }


  


 // look into Lodash for JavaScript, it is helpful for dealing with arrays and objects





// Set tab index for paywall elements, lock tabbing inside the paywall-content div - from Humberto
        // setTabbing: function () {
        //     var tabindex = 1;
        //     $('div.paywall-content *').each(function () {
        //         var $input = $(this);
        //         if ($input.hasClass('mktoField')) {
        //             $input.attr('tabindex', tabindex);
        //             if (tabindex === 1) {
        //                 $input.focus();
        //             }
        //             tabindex += 1;
        //         }
        //     });
        //     var $submitButton = $('button.mktoButton');
        //     if ($submitButton && $submitButton.length) {
        //         $submitButton.attr('tabindex', tabindex);
        //         tabindex += 1;
        //     }
        //     var $closeButton = $('button.close-button');
        //     if ($closeButton && $closeButton.length) {
        //         $closeButton.attr('tabindex', tabindex);
        //         $closeButton.on('focusout', function () {
        //             $('input.mktoField').first().focus();
        //         });
        //     }
        //   }
 


function nycTransformation() {
  console.log('nycTransformation function triggered');
  var theObject = {
    first: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcrossfitttown.com%2Fwp-content%2Fuploads%2F2015%2F09%2FRajs-110509-0014spotkevincurv.jpg&f=1&nofb=1',
    second: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Faerial-view-of-statue-of-liberty-lower-manhattan-picture-id84183602&f=1&nofb=1',
    third: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fil2.picdn.net%2Fshutterstock%2Fvideos%2F16032052%2Fthumb%2F1.jpg%3Fi10c%3Dimg.resize(height%3A160)&f=1&nofb=1'
  }
  setTimeout(function(){
    document.getElementById('NYC-transformation-section-image').src = theObject.first;
    setTimeout(function(){
      document.getElementById('NYC-transformation-section-image').src = theObject.second;
      setTimeout(function(){
        document.getElementById('NYC-transformation-section-image').src = theObject.third;
        nycTransformation();
      }, 3600);
    }, 3600);
  }, 3600)
 }


 nycTransformation();




 function multipleTypesOfHeadersHighlighter() {
  cosole.log('multipleTypesOfHeadersHighlighter triggered');
  setTimeout(function(){
    var targets = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (var i = 0; i < targets.length; i++) {
      targets[i].style.backgroundColor = 'orange';
    }
  }, 3000);
 } 


 // beginning of  incrementer section   (incrementing a value by 1)

var value = 0;
function adder() {
   console.log('adder triggered');
   value++;
}

function displayer() {
    console.log('displayer triggered');
    document.getElementsByClassName('StyledTime-sc-18zjaou')[0].innerHTML = value;
}

// incrementer section complete

// beginning link filter example 

function filter(x) {
  console.log('filter triggered');
  if(x.href.indexOf('.ca') > - 1) {
    x.style.backgroundColor = 'blue';
  }
}

function linkScanner() {
  console.log('linkScanner triggered');
  var linkz = document.querySelectorAll('a');
  for(var i = 0; i < linkz.length; i++) {
    filter(linkz[i])
  }
}

// link filter example complete

// FlexBox resource
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

// start of webcast-icon-filter-distributor
function webcastIconFilter(x) {
    if (x.href.indexOf('/content/dam') === -1) {
        x.classList.add('webcast');
    }
}

function webcastIconDistributor() {
    var targets = document.querySelectorAll('div.document-list-item-title > a');
    for (var i = 0; i < targets.length; i++) {
        webcastIconFilter(targets[i]);
    }
}
// finish of webcast-icon-filter-distributor 




// Idea for function for automated styling applier to whatever items/syntax entered

function testSubmitter() {
  alert('testSubmitter triggered');
  setTimeout(function(){
    var enteredValue = document.getElementById('styleAutomatorInput').value;
    document.getElementsByClassName('styledResult')[0].innerHTML = enteredValue;
    setTimeout(function(){
      document.getElementById('styleAutomatorInput').value = '';
    }, 1000);
  }, 2000);
}

// Idea for on-click accordion expander


// button style looper
// source of inspiration from stackoverflow https://stackoverflow.com/questions/38373291/using-javascript-how-to-display-element-one-by-one-on-click
  var colors = ['gray', 'blue', 'orange'];
  var x = '';
  var i = 0;
  document.getElementById('button-click-styler').onclick = function() {
    alert('test Jeff');
    if(i < colors.length) {
      x = colors[i++];
    }
    var target = document.getElementById('style-looper-section');
    target.style.backgroundColor = x;
  };

  // movie casts section
  function detectMovieInput() {
    console.log('detectMovieInput triggered');
    var target = document.getElementById('movieInput');
    console.log('the movie input value is', target.value);
    if(target.value === 'Mad Men') {
      document.getElementsByClassName('madmen')[0].style.display = 'block';
    }
    if(target.value === 'Suits') {
      document.getElementsByClassName('suits')[0].style.display = 'block';
    }
  }

  function clearMovieInput() {
    var target = document.getElementById('movieInput');
    target.value = '';
    document.getElementsByClassName('madmen')[0].style.display = 'none';
    document.getElementsByClassName('suits')[0].style.display = 'none';
  }



// regex function for searching string terms such as 'Chase'. Beginning:

// function filter(x) {
//   console.log('filter triggered');
//   if(x.textContent.match(/Bill/g)) {
//       console.log('verified are', x.textContent);
//       x.style.backgroundColor = 'blue';
//    }
//   if(x.textContent.match(/Constitution/g)) {
//       x.style.backgroundColor = 'hotpink';
//    }
// }

// function scanner() {
//    console.log('scanner triggered');
//    var targets = document.querySelectorAll('div.ghx-summary > span.ghx-inner');
//    for(var i = 0; i < targets.length; i++) {
//       filter(targets[i]); 
//    }
// }

// regex function for searching string terms such as 'Chase'. Complete








// Sorting strings is different from sorting integers, e.g. in an array of 'one', 'five hundred', 'eight', 1, 500, 8
// it will only be sorted alphabetically and then the first number, so it would be sorted as only this 1, 500, 8, 'eight', 'five hundred', 'one'

var array = ['one', 'five hundred', 'eight', 1, 500, 8];
var sortedArray = array.sort();
// results in 1, 500, 8, 'eight', 'five hundred', 'one'

// to sort integers properly, another method must be inserted in addition to the sort
var numberSort = array.sort(function(a, b){
  return a - b;
})
// results in 1, 8, 500


// making local variable from function available globally
var number = 8;

function transformer(number) {
  console.log('number is', number);
  var result = number * 6;
  console.log('result is', result);
  window.result;
}

function secondaryTransformer(result) {
  console.log('secondaryTransformer triggered');
  var finalResult = result * 8;
  return finalResult;
}

// transformer(number);
// secondaryTransformer(result); 


// members section
function initiate() {
  console.log('initiate triggered');
  var Mark = {
    firstName: 'Mark',
    familyMember: '1st born',
    age: '37',
    nickname: 'Marky-Mark'
  }
  var Grandpa = {
    firstName: 'Abraham',
    familyMember: 'Grandfather',
    age: 'passed to heaven',
    nickname: 'Grandpups'
  }
  var Grandma = {
    firstName: 'Evelina',
    familyMember: 'Grandmother',
    age: '81',
    nickname: 'Grand Mama'
  }
  var Susan = {
    firstName: 'Susan',
    familyMember: 'Mother',
    age: '61',
    nickname: 'Mommumz'
  }
  var Cesar = {
    firstName: 'Cesar',
    familyMember: 'father',
    age: '67',
    nickname: 'The Mexican'
  }
  var Carlo = {
    firstName: 'Carlo',
    familyMember: '2nd born brother',
    age: '31',
    nickname: 'Shaq-Pack'
  }
  var Angelo = {
    firstName: 'Angelo',
    familyMember: '3rd born brother',
    age: '30',
    nickname: 'Nicholas Cage'
  }
  var start = prompt('What is your first name?');
  if(start === 'Mark') {
    
    var firstData = Mark.firstName;
    var secondData = Mark.familyMember;
    var thirdData = Mark.age;
    var latestData = Mark.nickname;
    var totalData = 'Name:' + ' ' + firstData + ' ' + 'member:' + ' ' + secondData + ' ' + 'age:' + ' ' + thirdData + ' ' + 'nickname:' + ' ' + latestData;
    alert('you are' + ' ' + totalData);
    document.getElementsByClassName('members-display')[0].innerHTML = totalData;
  } 
  if(start === 'Grandpa') {
   
    var firstData = Grandpa.firstName;
    var secondData = Grandpa.familyMember;
    var thirdData = Grandpa.age;
    var latestData = Grandpa.nickname;
    var totalData = 'Name:' + ' ' + firstData + ' ' + 'member:' + ' ' + secondData + ' ' + 'age:' + ' ' + thirdData + ' ' + 'nickname:' + ' ' + latestData;
    alert('you are' + ' ' + totalData);
    document.getElementsByClassName('members-display')[0].innerHTML = totalData;
  }
  if(start === 'Grandma') {
    
    var firstData = Grandma.firstName;
    var secondData = Grandma.familyMember;
    var thirdData = Grandma.age;
    var latestData = Grandma.nickname;
    var totalData = 'Name:' + ' ' + firstData + ' ' + 'member:' + ' ' + secondData + ' ' + 'age:' + ' ' + thirdData + ' ' + 'nickname:' + ' ' + latestData;
    alert('you are' + ' ' + totalData);
    document.getElementsByClassName('members-display')[0].innerHTML = totalData;
  }
  if(start === 'Susan') {
    
    var firstData = Susan.firstName;
    var secondData = Susan.familyMember;
    var thirdData = Susan.age;
    var latestData = Susan.nickname;
    var totalData = 'Name:' + ' ' + firstData + ' ' + 'member:' + ' ' + secondData + ' ' + 'age:' + ' ' + thirdData + ' ' + 'nickname:' + ' ' + latestData;
    alert('you are' + ' ' + totalData);
    document.getElementsByClassName('members-display')[0].innerHTML = totalData;
  }
  if(start === 'Cesar') {
    
    var firstData = Cesar.firstName;
    var secondData = Cesar.familyMember;
    var thirdData = Cesar.age;
    var latestData = Cesar.nickname;
    var totalData = 'Name:' + ' ' + firstData + ' ' + 'member:' + ' ' + secondData + ' ' + 'age:' + ' ' + thirdData + ' ' + 'nickname:' + ' ' + latestData;
    alert('you are' + ' ' + totalData);
    document.getElementsByClassName('members-display')[0].innerHTML = totalData;
  }
  if(start === 'Carlo') {
   
    var firstData = Carlo.firstName;
    var secondData = Carlo.familyMember;
    var thirdData = Carlo.age;
    var latestData = Carlo.nickname;
    var totalData = 'Name:' + ' ' + firstData + ' ' + 'member:' + ' ' + secondData + ' ' + 'age:' + ' ' + thirdData + ' ' + 'nickname:' + ' ' + latestData;
    alert('you are' + ' ' + totalData);
    document.getElementsByClassName('members-display')[0].innerHTML = totalData;
  }
  if(start === 'Angelo') {
    
    var firstData = Angelo.firstName;
    var secondData = Angelo.familyMember;
    var thirdData = Angelo.age;
    var latestData = Angelo.nickname;
    var totalData = 'Name:' + ' ' + firstData + ' ' + 'member:' + ' ' + secondData + ' ' + 'age:' + ' ' + thirdData + ' ' + 'nickname:' + ' ' + latestData;
    alert('you are' + ' ' + totalData);
    document.getElementsByClassName('members-display')[0].innerHTML = totalData;
  } else {
    return;
  }
}


// parameter samples
var x = 3;
var y = 7;
function transformer(x, y) {
  // variables outside can be defined 
  // variables within scope can be redefined and result can change
  var result = x * y;
  console.log('result is', result);
}




 // incrementor section
//  var results = [];

// function calculatez(e) {
//      console.log('calculatez triggered');
//      if(e.keyCode === 38) {
//           results.push(1);
//      }
//      if(e.keyCode === 40) {
//           results.pop(1);
//      }
//      setTimeout(function(){
//           console.log('results are', results);
//      }, 1000);
// }

// document.addEventListener('keydown', calculatez);
// incrementor section complete












// keylogger sample
// array keyArray = [];

// function logger(x) {
//   console.log('logger triggered');
//   console.log('key pressed was', x);
//   keyArray.push(x.key);
// }

// function getter() {
//   console.log('getter triggered');
//   console.log('keyArray is', keyArray);
// }




 function autoSizerTrig() {
  console.log('autoSizerTrig triggered');
  var targVal = document.getElementById('autosizer-input').value;
  console.log('targVal is', targVal);
  var targDestination = document.getElementsByClassName('autosizer-display')[0];
  targDestination.innerHTML = targVal;
  console.log('letter length from targVal is', targVal.length);
  if (targVal.length == 8) {
    console.log('******** 8 reached');
    targDestination.style.border = '5px solid yellow';
    targDestination.style.fontSize = '5rem';
  }
  if (targVal.length == 10) {
    console.log('********** 10 reached');
    targDestination.style.border = '5px solid orange';
    targDestination.style.fontSize = '8rem';
  }
 }

 document.addEventListener('keydown', autoSizerTrig)

// random note: .append() and .html() seem to be the same


// look to create a webform 

// look to create dynamic accessible text (where variables + their sum indicate text) 
 


 // More Complex Masterpiece
 function sniper(x) {
    console.log('sniper triggered');
    console.log('textContent from sniper is', x.textContent);
    if(x.textContent.match(/Sustainable/g)) {
       x.style.backgroundColor = 'orange';
       console.log('parentElement is', x.parentElement);
       setTimeout(function() {
          console.log('**sniper sTo triggered');
          x.innerHTML = 'TRANSFORMED!'
          console.log('*** the closest element is', x.closest('a'));
          var nextTarget = x.closest('a');
          nextTarget.setAttribute('href', 'https://www.google.com');
       }, 1000);
    }
}

function sweeper() {
    console.log('sweeper triggered');
    var targets = document.querySelectorAll('div.item > a > h2 > span.util-text-trimmer-trimmed');
    setTimeout(function() {
        console.log('sTo triggered');
        for(var i = 0; i < targets.length; i++) {
             sniper(targets[i])
        }
    }, 2000);
}
 // More Complex Masterpiece Complete
 


 // Simple JavaScript Encryption on Console
 //var testString = 'kolokoy';
 //var encodedTestString = window.btoa(testString); 
 //var decodedTestString = window.atob(testString);


  // reusable mixin example
  // .content-p(@font-weight, @line-height, @font-size) {
  //   font-family: Amplitude;
  //   font-weight: @font-weight;
  //   font-size: @font-size;
  //   line-height: @line-height;
  //   margin-left: 5.5rem;
  // }

  // to use:
  // .content-p(500, 5rem, 3rem);


 // secure code practices
 //   direct insertion of data that comes from user input should either be avoided
 //   or at least sanitized
 //   ways of sanitizing 
 //   1) making data, variables which cannot be changed later on by the user
 //   2) using textContent property instead because this converts tags tp plain text instead  of innerHTML because innerHTML can bring in new HTML from user
 //   3) basically avoid anything that can be actively manipulated and inserted by the user without sanitization
//    In other words, inputs, should be "JavaScript" prevented and / or validated


// test logic for formatting ISO Dates into Human Readable Date Format
    var list = [];
  function converter(y) {
      console.log('converter triggered');
      console.log('the list is', list);
      var results = y.textContent;
      var formattedResult = results.substring(0,10);
      list.push(formattedResult);
  }

  function updateDOM(y, i) {
      console.log('update DOM triggered');
      var newestTargs = document.querySelectorAll('.testDate > span.jpmc-util-text-trimmer-trimmed');
      newestTargs.forEach(function(y, i){
          console.log('*y is', y);
          console.log('** i is', i);
          y.innerHTML = list[i];
      });
  }


  function dateElementScanner() {
      console.log('dateElementScanner triggered');
      var targets = document.querySelectorAll('.testDate > span.jpmc-util-text-trimmer-trimmed');
      for(var i = 0; i < targets.length; i++) {
          converter(targets[i]);
      }
    updateDOM();
  }
  setTimeout(function(){
        console.log('***sTo triggered');
        dateElementScanner();
    }, 2000);





// example callback

// function doWork(subject, callback) {
//   alert(`starting ${subject} work`);
//   alert('also be aware that the first alert does not use quotes but uses tick marks instead');
// }

// function announceComplete() {
//   alert('work complete');
// }

// doWork('coding', announceComplete); 
 

 function fctabuttonTrigger() {
    console.log('*fctabuttonTrigger triggered');
    var target = document.getElementsByClassName('floating-cta-button')[0];
    var bodyTarget = document.getElementsByClassName('floating-cta')[0];
    var buttonTarget = document.getElementsByClassName('fctabutton')[0];
    var openOptionsTarget = document.getElementsByClassName('new-open-options')[0];
    target.classList.toggle('open');
    bodyTarget.style.transition = '1s';
    openOptionsTarget.style.transition = '1s';
    bodyTarget.classList.toggle('open');
    buttonTarget.classList.toggle('open');
    openOptionsTarget.classList.toggle('open');
 }






// simple sample iterator distributor
 var arrayContainer = ['onez', 'twoz', 'threez', 'fourz', 'fivez'];

function simpleSampleIteratorDistributor() {
  console.log('simpleSampleIteratorDistributor triggered');
  setTimeout(function(){
      var targets = document.querySelectorAll('a.jq-link');
      for(var i = 0; i < targets.length; i++) {
        targets[i].setAttribute('alt', arrayContainer[i])
      }
  }, 1800);
} 







// NEW D3.JS Section JavaScript Logic  (d3.js logic is being imported from minified cdn in index.html script)
function d3Trigger() {
  console.log('d3Trigger started');
  setTimeout(function(){
    console.log('d3 sTo triggered');
    // setting dimensions of the pie chart
    var height = 450;
    var width = 450;
    var margin = 45;
    // radius is half the height or half the width of the smallest one
    var radius = Math.min(width,height) / 2 - margin
    // append svg object to my div with id #myDataViz
    var svg = d3.select('#myDataViz')
      .append('svg')
        .attr('width', width)
          .attr('height', height)
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ', ' + height / 2 +')');
    // create sample data
    var data = {a: 50, b: 30, c: 20};
    // set color scale
    var color = d3.scaleOrdinal()
      .domain(data)
      .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56']);
    // compute position of each group in pie
    var pie = d3.pie()
      .value(function(d) {return d.value;});
    var data_ready = pie(d3.entries(data))
    // build pie chart, basically each part of pie is a part built using the arc function
    console.log('testLog: svg is', svg);
    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d',d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr('fill', function(d){return(color(d.data.key))})
      .attr('stroke', 'black')
      .style('stroke-width', '2px')
      .style('opacity', 0.7)
  }, 999);
}



// counter examples 11-30-21
var counter = 0;
function filter(x) {
  console.log('filter triggered');
  var attr = x.getAttribute('src');
  if(attr.match(/jpg/g)) {
    console.log('*** match found', counter++)
  }
}

function scanner() {
  console.log('scanner triggered');
  setTimeout(function(){
    console.log('sTo triggered');
    var targets = document.querySelectorAll('img');
    for(var i = 0; i < targets.length; i++) {
      console.log('the attributes of the targers are', targets[i].getAttribute('src'));
      filter(targets[i]);
    }
  }, 1800);
}

// another simple sample counter 11-30-21
var count = 0;
function counter(){
  console.log('counter triggered');
  console.log('count is', count++);
}



function configurationInputTrigger() {
  console.log('configurationInputTrigger');
  var target = document.getElementById('configurationInput');
  var targetTwo = document.getElementsByClassName('block-one')[0];
  targetTwo.style.transition = '3s';
  setTimeout(function() {
    console.log('target.value is', target.value);
    if(target.value == 'right') {
      targetTwo.style.marginLeft = '80%';
    }
    if(target.value == 'middle') {
      targetTwo.style.marginRight = '50%';
      targetTwo.style.marginLeft = '50%';
    }
    if(target.value == 'left') {
      targetTwo.style.marginLeft = '0%';
      targetTwo.style.marginRigt = '50%';
    }
    target.value = '';
  }, 1000);
}




 function happyNewYear() {
  console.log('happyNewYear triggered');
  setTimeout(function(){
    var firstTarget = document.getElementsByClassName('first-image-gif')[0];
    var secondTarget = document.getElementsByClassName('second-image-gif')[0];
    firstTarget.style.display = 'none';
    secondTarget.style.display = 'block';
    setTimeout(function(){
      secondTarget.style.display = 'none';
      firstTarget.style.display = 'block';
      happyNewYear();
    }, 5000);
  }, 10000)
 }
 happyNewYear();


// example trigger when page reaches this point on scroll; substitute id with whatever element id wanted 
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#').position().top ){
        // alert('page position reached!!!!!')
        console.log('page position reached!!!!!');
        // this will reveal the prompt-notification that specified area on page has been reached
        var target = document.getElementsByClassName('prompt-notification')[0];
        target.style.visibility = "visible";
    }
    if( $(this).scrollTop() <= $('#').position().top) {
        var target = document.getElementsByClassName('prompt-notification')[0];
        target.style.visibility = "hidden";
    }
});



// Stock Market data using GET request via API    https://www.stockdata.org/documentation
  // older version attempt
// var theUrl = 'https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=O1yG5I2nVkKOvpMlEqctFXWKlzfeMUOMNRZtUoGA';
// function getAsyncHttpRequest(theUrl, callback) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function() {
//     if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//       callback(xmlHttp.responseText);
//     }
//     xmlHttp.open('GET', theUrl, true) // true for asynchronous
//     xmlHttp.send(null);
//   }
// }
  // newer version attempt using fetch
function getRequestForStockPricesViaAPI() {
  console.log('getRequestForStockPricesViaAPI triggered');
  //var url = 'https://api.stockdata.org/v1/data/quote?symbols=DJIA&api_token=O1yG5I2nVkKOvpMlEqctFXWKlzfeMUOMNRZtUoGA';
  //var url = 'https://api.stockdata.org/v1/entity/exchange/list?api_token=O1yG5I2nVkKOvpMlEqctFXWKlzfeMUOMNRZtUoGA';
  // var url = 'https://api.stockdata.org/v1/data/eod/multiple?symbols=JPM,BAC,GS&published_after=2022-01-11T03:48&language=en&api_token=O1yG5I2nVkKOvpMlEqctFXWKlzfeMUOMNRZtUoGA';
  var url = 'https://api.stockdata.org/v1/data/quote?symbols=JPM,BAC,GS&published_after=2022-01-11T03:48&language=en&api_token=O1yG5I2nVkKOvpMlEqctFXWKlzfeMUOMNRZtUoGA';
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data){
    //var translatedData = data[0].ticker;
    console.log('******** response data is:', data);
    //var dataToDisplay = data.data[0].ticker;
    //var dataToDisplay = data.data[0].name + ' ' + data.data[0].ticker + ' ' + data.data[0].price;
    //var displayArea = document.getElementsByClassName('stock-market-data-display')[0];
    //displayArea.innerHTML = dataToDisplay;
    // var dataToDisplay = data.data[0].symbol + ' ' + data.data[0].close + ' ' + data.data[1].symbol + ' ' + data.data[1].close + ' ' + data.data[2].symbol + ' ' + data.data[2].close;
    var dataToDisplay = data.data[0].ticker + ' ' + data.data[0].price + ' ' + data.data[1].ticker + ' ' + data.data[1].price + ' ' + data.data[2].ticker + ' ' + data.data[2].price;
    var displayArea = document.getElementsByClassName('stock-market-data-display')[0];
    displayArea.innerHTML = dataToDisplay;
  }).catch(function(){
    console.log('????????fetch unsucessful')
  });
}
// miscellaneous notes
//https://quant.stackexchange.com/questions/26078/how-can-one-query-the-google-finance-api-for-dow-jones-and-sp-500-values

// try to create looping video hero banner

// window resize detector function
function resizeDetector() {
  var target = document.getElementsByClassName('screen-announcer')[0];
  console.log('resize resize resize');
  console.log('current width is', document.body.clientWidth);
  if (document.body.clientWidth = 1200) {
    target.innerHTML = '1200px';
  } 
  if (document.body.clientWidth = 1000) {
      target.innerHTML = '1000px';
  }
  if (document.body.clientWidth = 800) {
    target.innerHTML = '800px';
  }
}

window.addEventListener('resize', resizeDetector);

// sample emailValidation from codepen, for MktoForms2
// HTML
// <!-- standard Form embed -->
// <script src="//app-sj01.marketo.com/js/forms2/js/forms2.min.js"></script>
// <form id="mktoForm_1293"></form>
// <script>MktoForms2.loadForm("//app-sj01.marketo.com", "410-XOR-673", 1293);</script>
// <!-- /standard Form embed -->

// <!-- FormsPlus libraries -->
// <script id="teknklFormsPlus-EmailPattern-1.0.3" src="https://assets.codepen.io/250687/teknkl-formsplus-emailpattern-1.0.3.js"></script>
// <!-- /FormsPlus libraries -->
// JavaScript
/*
 * @author Sanford Whiteman
 * @version v1.1 2020-11-15
 * @copyright © 2020 Sanford Whiteman
 * @license Hippocratic 2.1: This license must appear with all reproductions of this software.
 *
 *
 *
 */

// (function () {
//    const invalidDomains = [
//       "gmail.com", 
//       "yahoo.com", 
//       "hotmail.com",
//       "sandy@fig1.com",
//       "sandy@fig1.net"
//       ]
//       invalidMessage = "Must be a Business email.";

//    const interestingEmailField = "Email";

//    /* NO NEED TO ALTER BELOW THIS LINE */

//    MktoForms2.whenReady(function (mktoForm) {
//       const formEl = mktoForm.getFormElem()[0],
//          emailEl = formEl.querySelector("[name='" + interestingEmailField + "']");

//       mktoForm.onValidate(extendedEmailValidation);

//       function extendedEmailValidation(nativeValid) {
//          if (nativeValid === false) return;

//          let currentValues = mktoForm.getValues(),
//             originalSubmittable = mktoForm.submittable(),
//             email = currentValues[interestingEmailField];

//          if (email) {
//             if (FormsPlus.emailPattern.match(email, invalidDomains)) {
//                emailEl.classList.add("customInvalid");
//                emailEl.setAttribute("aria-invalid", "true");
//                mktoForm.submittable(false);
//                mktoForm.showErrorMessage(invalidMessage, MktoForms2.$(emailEl));
//             } else {
//                emailEl.classList.remove("customInvalid");
//                emailEl.setAttribute("aria-invalid", "false");
//                mktoForm.submittable(originalSubmittable);
//             }
//          }
//       }
//    });
   
// })();

// randomizing an array
//  first is sorting it
var container = ['burgers', 'pizza', 'sushi', 'omelette', 'nilagang baka'];
container.sort() 
  // outputs (5) ['burders', 'nilagang baka', 'omelette', 'pizza', 'sushi'];
container.sort((a, b) => 0.5 - Math.random());
  // outputs a randomized version 





// sample dom-scanner-detector
// for condition-based logic
// (for confirming whether an element or condition is present on the page, and then performing logic accordingly)
var thing = 'something';
if(thing.length) {
  // perform logic 
} 





// to simulate slower connections, the network tab in developer console has options to switch from online to 5, 4, and 3g


// promises are used to avoid callback hell, this is why promises are mainly useful for
// https://www.youtube.com/watch?v=YiYtwbnPfkY 1
// https://www.youtube.com/watch?v=EQem2gugonA 2

// https://reactjs.org/docs/react-without-jsx.html 


// https://reactgo.com/react-createelement-example/
// https://stackoverflow.com/questions/65989536/how-to-define-a-img-tag-inside-a-react-createelement-in-react








// JavaScript, compare variable against array of values
// https://stackoverflow.com/questions/23108643/javascript-compare-variable-against-array-of-values
// in jQuery for now, should convert to plain JavaScript
// needs to be attached to eventListener on a form, as it runs a type of validaton on the form's input values
function inputScanner() {
  console.log('inputScanner triggered');
  var valueArray = ['marketoz', 'marketingz', 'valuez'];
  $(':input').each(function(){
    console.log('the values of the inputs are', $(this).val());
    if(valueArray.includes($(this).val())) {
      alert('********keyword match found********');
    }
  })
}
$('input').click(function(){
  inputScanner();
})

$(document).ready(function(){
  console.log('!!!!!!ready!!!!!!')
  $(':a').click(function(){
    alert('link clicked!')
  })
})


 // sample re-direct logic after successful form submit
  // var form = 'whatever form used';
  // var successUrl = 'whatever url (page) we want user to see after successfully submitting';
  // var followUpUrl = 'whatever url (page) we want user to see after submitting regardless';
  // form.onSubmit(function(){
  //   if(successUrl) {
  //     location.href = successUrl;
  //   } 
  //   else {
  //     location.href = followUpUrl;
  //   }
  //   return false;
  // })

// simple email input validator (can be used for any input, or string data, really)
function emailValidator() {
  console.log('emailValidator triggered');
  var errorMessage = 'please use correct letter / syntax format';
  var emailInputVal = document.getElementById('Email');
  var value = emailInputVal.value;
  // RegEx here, ig at the end: i means case insensitive, g, means global
  if(value.match(/gmail.com|yahoo.com|hotmail.com/ig)) {
    console.log('emailValidator match made, email is invalid');
    emailInputVal.classList.add('customInvalid');
    emailInputVal.setAttribute('aria-invalid', 'true');
    form.submittable(false);
  } else {
    console.log('email validated');
    emailInputVal.classList.remove('customInvalid');
    emailInputVal.setAttribute('aria-invalid', 'false');
    form.submittable(true);
  }
}


function windowPopulatorTrigger() {
  var populatorArray = ['one', 'two', 'three'];
  console.log('windowPopulatorTrigger triggered');
  // console.log('populatorArray[i] is', populatorArray[i]);
  // console.log('populatorArray[i++] is', populatorArray[i++]);
  // var sortedArray = populatorArray.sort();
  // console.log('sortedArray is', sortedArray);
  var targets = document.querySelectorAll('div.pws-window > h2');
  // console.log('targets are', targets);
  for(var i = 0; i < targets.length; i++){
    //targets[i].innerHTML = populatorArray.join('&nbsp');
    targets[i].innerHTML = populatorArray[i];
    console.log('populatorArray[i] is', populatorArray[i]);
  }
}

function clearPopulatedWindows() {
  console.log('clearPopulatedWindows triggered');
  var targets = document.querySelectorAll('div.pws-window > h2');
  for(var i = 0; i < targets.length; i++) {
    targets[i].innerHTML = '';
  }
}


// load preferred image, then check if it's actually present on the DOM, if not, replace with default img
$(document).ready(function(){
  var targetElements = document.querySelectorAll('img.first-logo');
  for(var i = 0; i < targetElements.length; i++) {
    targetElements[i].setAttribute('src', '/content/dam/sampleImage1');
  }
  function missingLogoDetector() {
    console.log('mLD triggered');
    var targetElement = document.getElementsByClassName('first-logo')[0];
    console.log('targetElement.naturalHeight is', targetElement.naturalHeight);
    if(targetElement.naturalHeight == 0) {
      console.log('logi image is missing, and will now be replaced');
      var targetElements = document.querySelectorAll('img.first-logo');
      for(var i = 0; i < targetElements.length; i++) {
        targetElements[i].style.height = '40px';
        targetElements[i].style.width = '40px';
        targetElements[i].setAttribute('src', '/content/dam/sampleImage2');
      }
    }
  }
  // setTimeout(function(){
  //   console.log('sTo triggered');
  //   missingLogoDetector();
  // }, 2200);
})





// node traversal
function filter(y) {
  console.log('filter triggered');
  if(y.textContent.indexOf('Copy') > -1) {
    y.style.backgroundColor = 'orange';
    y.parentNode.parentNode.childNodes[1].firstElementChild.firstElementChild.setAttribute('src', 'https://media.istockphoto.com/photos/the-city-of-dreams-new-york-citys-skyline-at-twilight-picture-id599766748');
  }
}

function scanner() {
  console.log('scanner triggered');
  var targets = document.querySelectorAll('span.jpmc-util-text-trimmer-trimmed');
  for(var i = 0; i < targets.length; i++) {
    filter(targets[i]);
  }
}

function flexDistributor(y) {
  console.log('flexDistributor triggered')
  var firstTarg = document.getElementsByClassName('flex-container')[0];
  var dynamicContainer = document.createElement('div');
  dynamicContainer.style.height = '100px';
  dynamicContainer.style.width = '100px';
  dynamicContainer.style.backgroundColor = 'blue';
  var tag = document.createElement('p');
  tag.style.fontSize = '22px';
  tag.style.color = 'white';
  tag.innerHTML = y;
  dynamicContainer.appendChild(tag);
  firstTarg.appendChild(dynamicContainer);
}
function submitFlexInputData() {
  var flexInputArray = [];
  var flexinputTarg = document.getElementById('flex-input').value;
  var flexinputName = document.getElementById('flex-input-name').value;
  var flexinputCompany = document.getElementById('flex-input-company').value;
  var flexinputTitle = document.getElementById('flex-input-title').value;
  console.log('flexInputName is', flexinputName);
  flexInputArray.push(flexinputTarg);
  flexInputArray.push(flexinputName);
  flexInputArray.push(flexinputCompany);
  flexInputArray.push(flexinputTitle);
  setTimeout(function(){  
    console.log('flexInputArray is now', flexInputArray)
  }, 1000)
  for(var i = 0; i < flexInputArray.length; i++) {
     flexDistributor(flexInputArray[i]);
  }
}


function flex() {
  console.log('flex triggered');
  var firstTarg = document.getElementsByClassName('flex-container')[0];
  var inputTarg = document.getElementById('flex-input').value;
  var dynamicContainer = document.createElement('div');
  var tag = document.createElement('p')
  var text = document.createTextNode(inputTarg);
  tag.appendChild(text);
  dynamicContainer.style.height = '100px';
  dynamicContainer.style.width = '100px';
  dynamicContainer.style.backgroundColor = 'brown';
  firstTarg.appendChild(tag);
  firstTarg.appendChild(dynamicContainer);
  dynamicContainer.appendChild(tag);
  setTimeout(function(){
    var firstTarg = document.getElementsByClassName('flex-container')[0];
    var secondTargets = document.getElementsByClassName('flex-item');
    firstTarg.style.display = 'flex';
    setTimeout(function(){
      firstTarg.style.flexDirection = 'row';
      setTimeout(function(){
        firstTarg.style.justifyContent = 'space-between';
        firstTarg.style.flexWrap = 'wrap';
        setTimeout(function(){
          for(var i = 0; i < secondTargets.length; i++) {
            secondTargets[i].style.backgroundColor = 'blue';
          }
        },2000);
      },2000)
    },2000);
  },2000);
} 

function apiFetch() {
    console.log('apiFetch triggered');
    // commented out original syntax because the console.log was the completion and data could not further be parsed.
    // OR actually now, I think since the data can be plural, it has to be parsed through a for loop or map function first, before being able to be rendered
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(console.log);
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(function(data){
      console.log('data is', data);
      console.log('data.title is', data.title);
      var dataNow = data.title;
      console.log('from deep within apiFetch, dataNow is', dataNow);
      var firstTarg = document.getElementsByClassName('flex-container')[0];
      console.log('firstTarg is', firstTarg);
      // from my experimentations, i think DOM modification is not allowed within .then chains, it seems to be purely for data
      // and any DOM or styling must be implemented after outside of the scope of the .then chains

      var tag = document.createElement('p');
      var node = document.createTextNode(dataNow);
      var translated = node.textContent;
      var result = tag.appendChild(node);
      // var finalResult = result.data;
      var finalResult = dataNow;

      // var dynamicApiFetchContainer = document.createElement('div');
      // dynamicApiFetchContainer.appendChild(result);
      // dynamicApiFetchContainer.style.height = '100px';
      // dynamicApiFetchContainer.style.width = '100px';
      // dynamicApiFetchContainer.style.backgroundColor = 'hotpink';
      console.log('tag is', tag);
      console.log('node is', node);
      console.log('node.toString() is', node.toString());
      console.log('node.textContent it', node.textContent);
      console.log('translated is', translated);
      // firstTarg.innerHTML = dataNow;
      // var dynamicApiFetchContainer = document.createElement('div');
      // dynamicApiFetchContainer.appendChild(result);
      // dynamicApiFetchContainer.style.height = '100px';
      // dynamicApiFetchContainer.style.width = '100px';
      // dynamicApiFetchContainer.style.backgroundColor = 'hotpink';

      // firstTarg.innerHTML = dataNow;
      //firstTarg.innerHTML = translated;
      //firstTarg.innerHTML = translated;
      firstTarg.innerHTML = finalResult;

      // for(var i = 0; i < data.length; i++) {
      //   let container = document.createElement('div');
      //   let firstData = document.createElement('p');
      //   firstData.appendChild(data[i]);
      //   container.appendChild(firstData);
      //   firstTarg.innerHTML = container;
      // }
    }).catch(function(){
      console.log('the apiFetch is not successful right now');
    })
}




// DOM highlighter using wildcards
function wildCardHighLighter() {
  console.log('wildCardHighLighter triggered');
  setTimeout(function(){
    console.log('sTo triggered');
    var targets = document.querySelectorAll('[class^="flex"]');
    for(var i = 0; i < targets.length; i++) {
      console.log('targets[i] are', targets[i]);
      targets[i].style.border = '3px dotted orange';
    }
  }, 1000);
}




// infocard
function infocardTrigger() {
  console.log('infocardTrigger triggered');
  var target = document.getElementsByClassName('info-card-display')[0];
  var inputName = document.getElementById('info-card-input-name').value;
  var inputProfession = document.getElementById('info-card-input-profession').value;
  var infocard = document.createElement('div');
  var linkDiv = document.createElement('div');
  linkDiv.style.height = '38px';
  linkDiv.style.width = '100%';
  linkDiv.style.backgroundColor = 'lightblue';
  var link = document.createElement('a');
  var linkText = document.createTextNode('link here');
  link.appendChild(linkText);
  link.setAttribute('href', 'https://www.google.com');
  linkDiv.appendChild(link);
  var textNodeName = document.createTextNode(inputName);
  var textNodeProfession = document.createTextNode(inputProfession);
  var text = document.createElement('p');
  text.style.fontSize = '22px';
  text.style.color = 'white';
  text.classList.add('ellipseAndLineClamp');
  console.log('input is', inputName);
  text.appendChild(textNodeName);
  text.appendChild(textNodeProfession);
  infocard.style.height = '300px';
  infocard.style.width = '300px';
  infocard.style.backgroundColor = 'maroon';
  infocard.classList.add('info-card-hidden');
  infocard.appendChild(text);
  infocard.appendChild(linkDiv);
  target.appendChild(infocard);
  setTimeout(function(){
    console.log('infocard sTo triggered');
    infocard.classList.add('appear');
    document.getElementById('info-card-input-name').value = '';
    document.getElementById('info-card-input-profession').value = '';
    setTimeout(function(){
      target.style.display = 'flex';
      target.style.flexWrap = 'wrap';
      setTimeout(function(){
        target.style.flexDirection = 'row';
        setTimeout(function(){
          target.style.justifyContent = 'space-between';
        },1000);
      },1000)
    },1000);
  },1000)
} 

// dynamically generating text for array through iteration
function dynamicAdder() {
  console.log('dynamicAdder triggered');
  var array = ['first ', 'second ', 'third ', ' fourth', ' fifth'];
  setTimeout(function(){
    console.log('sTo triggered');
    var targetDestination = document.getElementsByClassName('info-card-display')[0];
    console.log('targetDestination is', targetDestination);
    for(var i = 0; i < array.length; i++) {
      console.log('contents of array are array[i]', array[i]);
      var container = document.createElement('div');
      container.style.height = '100px';
      container.style.width = '100px';
      container.style.backgroundColor = 'lightblue';
      console.log('container is', container)
      var tag = document.createElement('p');
      tag.style.fontSize = '22px';
      tag.style.color = 'white';
      var text = document.createTextNode(array[i]);
      var textandtag = tag.appendChild(text);
      container.appendChild(textandtag);
      targetDestination.appendChild(container);
    }
  },3100);
}



// setTimeout(function(){
//   console.log('!!!!!test log, will not set URL!!!!!');
//   window.location.href = 'https://www.stackoverflow.com';
// }, 5000);
 




 