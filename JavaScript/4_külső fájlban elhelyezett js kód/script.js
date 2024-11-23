// JavaScript kód, amely megváltoztatja az üzenetet a div elemben
function changeMessage() {
    // Az elem kiválasztása az id alapján
    var messageElement = document.getElementById("message");
    // Az elem tartalmának megváltoztatása
    messageElement.innerHTML = "Hello World!";
}


// Külső JavaScript fájl (script.js):

// A changeMessage nevű függvény az getElementById("message") segítségével kiválasztja a div elemet, amelynek az id attribútuma "message".
// Az elem tartalmát az innerHTML tulajdonság megváltoztatásával frissítjük "Hello World!" üzenetre.