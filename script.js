document.write("this is being written from a document.write script")

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
      document.getElementById("theTable").innerHTML = "transformed!!!!!!!";
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
  firstInputIdVal = document.getElementById('firstInputId').value;
  secondInputIdVal = document.getElementById('secondInputId').value;
  console.log('sum function has just been triggered');
  console.log('the value of the firstInputId is', firstInputIdVal);
  console.log('the value of the secondInputId is', secondInputIdVal);
  if(isNan(firstInputIdVal) && isNan(secondInputIdVal)) {
    console.log('fck nah, it is a string');
  } else {
    console.log('these are integers')
  }
  summerVal = +firstInputIdVal + +secondInputIdVal;
  console.log('now the total Value is:', summerVal);
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




