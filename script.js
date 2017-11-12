document.write("this is being written from a document.write script")

function verifyFunction(){
  var start = prompt("what is the number");
  if(start == "90210"){
    document.getElementById("here").innerHTML = "account verified"
  } else {
    alert("account not verified");
  }
}



function onloadFunction(){
  alert("This is the very first function and also functions first, when the document loads!");
  document.getElementById("here").innerHTML = "this is being written from a document.getElementById script"
}

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
  $("#anime1").show();
    return false;
})

$("#hideButton").click(function(){
  $("#anime1").hide('slow');
})




