// Istruzioni
// Chiedi all’utente tramite prompt il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21
// BONUS: Al posto del 21 finale, generate un numero intero random (tipo tra 0 e 99) 

// Check collegamento files
console.log("Hello World!");

// Suddivisione
// 1. INPUT DATI
// 2. LOGICA
// 3. OUTPUT

// * 1. INPUT DATI
// Richiesta del nome dell'utente
let userName = prompt("Ciao! Scrivi il tuo NOME"); // string
console.log(userName, typeof userName);

// Richiesta del cognome dell'utente
let userSurname = prompt("Ora scrivi il tuo COGNOME"); // string
console.log(userSurname, typeof userSurname);

// Richiesta del colore preferito dell'utente
let userFavColor = prompt("Qual è il tuo colore preferito?"); // string
console.log(userFavColor, typeof userFavColor);


// * 2. LOGICA
// Generazione di un numero casuale tra 0 e 99
const randomNumber = Math.floor(Math.random() * 100); // number
console.log(randomNumber, typeof randomNumber);
// Genero la nuova password
const newPwd = `${userName}${userSurname}${userFavColor}${randomNumber}`.toLowerCase() // string
console.log(newPwd, typeof newPwd);

// * 3. OUTPUT
// Preparo il messaggio
const resultMessage = `La tua nuova password è: ${newPwd}` // string
console.log(resultMessage, typeof resultMessage);
// Stampo il messaggio in pagina
document.getElementById("message").innerHTML = resultMessage;
