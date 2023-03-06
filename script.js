
let body = document.querySelector('body');
let h1 = document.querySelector("h1");
let cards = document.querySelectorAll(".item");
let p = document.querySelectorAll('p');


function alteraTema() {

    body.classList.toggle("temaEscuro");
    h1.classList.toggle("letraEscuro");

    for(let card of cards || p){
        card.classList.toggle("itemClaro")
        card.classList.toggle('itensEscuro')        
    }
}

