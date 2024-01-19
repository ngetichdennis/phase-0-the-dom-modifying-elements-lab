// Write your code here!
// Get the main element by its id and remove it from the document
const main = document.getElementById('main');
main.remove();

// Create a new header element with id 'victory' and assign it to a variable
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the inner HTML of the new header element to a message with your name
newHeader.innerHTML = 'YOUR-NAME is the champion';

// Append the new header element to the body of the document
document.body.appendChild(newHeader);