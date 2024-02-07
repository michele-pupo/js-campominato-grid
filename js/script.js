// Consegna
// - L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// - Ogni cella ha un numero progressivo, da 1 a 100.
// - Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// - Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità :muscolo::carnagione-2:

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// facciamo la griglia con un ciclo for
const gridElement = document.querySelector("#grid");
// console.log(gridElement);

// creiamo la griglia 10x10
for(let i = 0; i < 100; i++){

    // creo un elemtno, gli metto la classe e lo aggiungo alla griglia
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    // console.log(newElement);

    // aggiungiamo il numero in ogni elemento della griglia
    newElement.innerText = i + 1;

    // aggiungiamo un click ad ogni elemento della griglia
    newElement.addEventListener("click", function() {
        // console.log("click");

        // per sapere quale elemento è stato cliccato useremo il "this"
        // console.log(this);
        this.classList.toggle("active");
        console.log(this.innerText);
    })

    gridElement.append(newElement);
}
