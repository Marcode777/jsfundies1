// function firstUtils(){
//   console.log('firstUtils triggered!!!!!')
// }

// export default firstUtils;



// var Utils = (function () {
//   return {
//     firstFunc: function() { console.log('firstFunc triggered from utils!') },
//     secondFunc: function() { alert('secondFunc triggered from Utils!') }
//   }
// }());

window.Utils = (function () {
  return {
    firstFunc: function() { console.log('firstFunc triggered from utils!') },
    secondFunc: function() { alert('secondFunc triggered from Utils!') }
  }
}());