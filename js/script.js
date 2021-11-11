// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedo all'utente il nome
const userName = prompt('Come ti chiami?');
console.log(userName);

// Chiedo all'utente il cognome
const userLastName = prompt('Come ti chiami di cognome?');
console.log(userLastName);

// Chiedo all'utente il suo colore preferito
const userColor = prompt("Qual'è il tuo colore preferito?");
console.log(userColor);

// Creo il messaggio
const userMessage = 'La tua Password è ' + userName + userLastName + userColor + 21;
console.log(userMessage);

// Lo stampo in pagina
document.getElementById('user_message').innerHTML = userMessage;