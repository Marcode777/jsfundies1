// alert('test-alert from jsthehardparts');
console.log('*****test log from javascriptthehardparts-iterations');


//Iterators
  //how we access our data that we've stored in our application
  //depends on one of the most powerful concepts in JavaScript: closures
  //iterators form the basis for generators, one of the most powerful parts of ES6
  //
  //
  //
  //
  //
  //
  //save data, and use it. iterators are for accessing it
  //
  //
  //
  //
  // first step Data Store: global memory
  // function is a 'mini memory', local memory
const numbers = [4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// diagramming this for loop is: 
// check this: i < numbers.length
// 0 < 3
// 1 < 3
// 2 < 3
// 3 < 3 
//
// do this: console.log(numbers[i]);
// this is all redundant work when all we want is the 4, 5, 6


// with a powerful new ES6 feature,
// we can automate the actual taking of the numbers in the index
// 
// getNextNumber()
// if it's currently at 4, how is it going to be able to give 5 next if it doesn't retain memory?

// we give it 'superpowers'
// by making it a function within a function

function createFunction() {
  function add2(num) {
    return num + 2;
  }
  return add2;
}

const generatedFunc = createFunction();

const result = generatedFunc(3); // 5


// save createFunction
// invoke createFunction
// the righthand side of generatedFunc cannot be saved right now, because it is not a definition, it is actually the running of the function because of the parentheses
// this is probably one of the most important concepts in JavaScript beside the eventLoop
// 
// once createFunction is invoked and is finished, the data is deleted except for what is returned
// JavaScript never works its way back up the thread
// JavaScript only goes one way, single-threadedly, if it seems it's working its way back up, it's really looking up its DataStore or memory
// function definition is the 'code of function'
// you can not save an actual function invocation, you can only save a value
// so in generatedFunc = createFunction(); it is just telling it to run the code, but it is NOT saving it as createFunction();
// in reality, after createFunction(); is called, generatedFunc is actually being defined as add2 or whatever createFunction() returns;



// the advantage of creating a function within another function this way is it is able to 'remember'



// creating a function that returns elements one by one



function createFunction(array){
  let i = 0;
  function inner(){
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

const returnNextElement = createFunction([4, 5, 6]);
const element1 = returnNextElement();
const element2 = returnNextElement();
console.log('element1', element1);
console.log('element2', element2);

createFunction();

// amazingly, the backpack is carried through as [4, 5, 6], in MEMORY! THIS IS THE MAGIC!
// we now have functions that have two memories, one with temp memory, and another with permanent memory! This is the key!
// this permanent memory is stored inside the function inside the hidden property called SCOPE!
// this memory can only be accessed through this function
// the name of this backpack of data is C.O.V.E. (closed over variable environment)
// another name for this backpack of data is P.S.R.D. (persistent scope reference data)
// another name for this is P.L.S.R.D. (persistent lexical scope reference data)
// or, just call it the BACKPACK again! 
// it's also called a CLOSURE!
// returnNextElement is known as an ITERATOR
// now instead of grabbing all of the data and then looping through all of it, we have a function that gives the actual element, and then when it's ran again, it gives the actual next element instead of having to iterate through the whole data again

// So iterators turn our data into 'streams' of actual values we can access after another


