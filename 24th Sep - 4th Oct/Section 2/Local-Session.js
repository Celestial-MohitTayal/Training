// Setting data
localStorage.setItem('username', 'Alice');

// Getting data
const username = localStorage.getItem('username');
console.log(username); // Outputs: Alice

// Removing data
localStorage.removeItem('username');

// Clearing all data
localStorage.clear();


//-----------

// Setting data
sessionStorage.setItem('sessionId', '123456');

// Getting data
const sessionId = sessionStorage.getItem('sessionId');
console.log(sessionId); // Outputs: 123456

// Removing data
sessionStorage.removeItem('sessionId');

// Clearing all data
sessionStorage.clear();



//Won't work without browser