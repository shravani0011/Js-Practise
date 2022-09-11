// Traversing the DOM // 
var itemList = document.querySelector('#items');   

//parentNode
// console.log(itemList.parentNode); 
// itemList.parentNode.style.backgroundColor='grey'; 


//parentElement 
console.log(itemList.parentElement); 
itemList.parentElement.style.backgroundColor='grey';  
console.log(itemList.parentElement.parentElement.parentElement);   

// childNodes 
// console.log(itemList.childNodes);  

console.log(itemList.children); 
console.log(itemList.children[1]); 
itemList.children[1].style.backgroundColor = 'yellow';  

// First Child 
console.log(itemList.firstChild); 
// first element child 
console.log(itemList.firstElementChild); 
itemList.firstElementChild.textContent = 'hello 1';

// last child   
console.log(itemList.lastChild); 
// last element child 
console.log(itemList.lastElementChild); 
itemList.lastElementChild.textContent = 'Hello 4'; 

// nextSibling 
console.log(itemList.nextSibling); 
// nextElementSibling 
console.log(itemList.nextElementSibling);  

// previousSibling 
console.log(itemList.previousSibling); 
// previousElementSibling 
console.log(itemList.previousElementSibling); 
itemList.previousElementSibling.style.color = 'green';    

// createElement 

// create a div 
var newDiv = document.createElement('div'); 

// Add id 
newDiv.id = 'hello1'; 

// add attr 
newDiv.setAttribute('title', 'Hello Div');

// create text node 
var newDivText = document.createTextNode('Hello World'); 

// Add text to div    
newDiv.appendChild(newDivText); 


var container = document.querySelector('header .container'); 
var h1 = document.querySelector('header h1'); 
container.insertBefore(newDiv, h1);  


var ul = document.querySelector('.list-group'); 
var li = document.querySelector('li:first-child'); 
ul.insertBefore(newDiv, li); 

console.log(newDiv);