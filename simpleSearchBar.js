// credit goes to this site, where I got the idea and knowledge from https://dev.to/am20dipi/how-to-build-a-simple-search-bar-in-javascript-4onf 







setTimeout(function(){
    console.log('######## sTo for simpleSearchBar triggered');
    var target = document.querySelector('.simpleSearchBarMainContainer');
    target.style.border = '8px solid gold';
  }, 2400);

  // const citiesArray = [
  //   { cityName: 'New York City', knownFor: 'finance, culture, fashion, entertainment, delegation, headquarters hub'},
  //   { cityName: 'London', knownFor: 'finance, culture, hub'},
  //   { cityName: 'Paris', knownFor: 'beauty, fashion, culture, hub'},
  //   { cityName: 'Frankfurt', knownFor: 'finance, entertainment hub'}
  // ] 

  const people = [
    { name: 'adri'},
    { name: 'becky'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
]

  // function setList(results) {
  //   for (const city of results){
  //       // creating a li element for each result item
  //       const resultItem = document.createElement('li');

  //       // adding a class to each item of the results
  //       resultItem.classList.add('result-item');

  //       // grabbing the name of the current point of the loop and adding the name as the list item's text
  //       const text = document.createTextNode(city.cityName)

  //       // appending the text to the result item
  //       resultItem.appendChild(text)

  //       const list = document.querySelector('#simpleSearchBarResultsList');
  //       // appending the result item to the list
  //       list.appendChild(resultItem)
  //   }

  // }

  var list = document.querySelector('#simpleSearchBarResultsList');

  function clearList(){
    // looping through each child of the search results list and remove each child
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
  
}

function noResults(){
  // create an element for the error; a list item ("li")
  const error = document.createElement('li')
  // adding a class name of "error-message" to our error element
  error.classList.add('error-message')

  // creating text for our element
  const text = document.createTextNode('No results found...')
  // appending the text to our element
  error.appendChild(text)
  // appending the error to our list element
  list.appendChild(error)
}

  function setList(results){
    clearList();

    for (const person of results){
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(person.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        var list = document.querySelector('#simpleSearchBarResultsList');
        // appending the result item to the list
        list.appendChild(resultItem)
    }
    if (results.length === 0) {
      noResults();
    }
}

  const searchInput = document.querySelector('#simpleSearchBarInput');

  // searchInput.addEventListener("keydown", function(e) {
  //   let value = e.target.value;
  //   console.log('from event listener, e is', e);
  //   console.log('from event listener, e.target.value is', e.target.value);
  //   console.log('from event listener, value is', value);

  //   if(value && value.trim().length > 0) {
  //       value = value.trim().toLowerCase();

  //       // setList(people.filter(person => {
  //       //     return person.name.includes(value)
  //       // }))

  //       setList(citiesArray.filter(function(city) {
  //           return city.cityName.includes(value)
  //       }));

  //   } else {
  //       console.log('unreadable, no proper value typed in input');
  //   }

  // });



  searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0){
         value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the person's name
        setList(people.filter(person => {
            return person.name.includes(value)
        }))
     }
});
  const clearButton = document.querySelector('#simpleSearchBarClearButton');
  
  clearButton.addEventListener("click", function() {
    location.reload();
  });


