console.log("nuovo carosello")

const slides = [
    {
        image: "./img/01.webp",
        title: "Marvel's Spiderman Miles Morales",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    }, {
        image: "./img/02.webp",
        title: "Ratchet & Clank: Rift Apart",
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    }, {
        image: "./img/03.webp",
        title: "Fortnite",
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: "./img/04.webp",
        title: "Stray",
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    }, {
        image: "./img/05.webp",
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

//const [ slide1, slide2, slide3, slide4, slide5 ] = slides





//console.log(slide1, slide4)

// Consegna:
// Dato un array di oggetti letterali con le seguenti proprietà:
// url dell’immagine
// titolo
// descrizione

// Creare un carosello identico a quello realizzato qualche giorno fa.
// Potete rifare tutto da capo oppure ripartire dal codice del vecchio esercizio (ma fate attenzione ad non incasinarvi )
// La struttura delle singole slide deve essere leggermente modificata in modo da far comparire sopra all’immagine il titolo e la descrizione (trovate un esempio allegato)
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico del carosello e delle singole slide (se partite dal vecchio codice commentatevi la parte che genera le slide dinamicamente da js)

// Milestone 1:
// Rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// PS.
// La logica del cambio slide deve continuare a funzionare anche con la nuova struttura delle slide

// BONUS 0:
// se il vecchio esercizio non era completo o non del tutto funzionante completatelo/correggetelo

// BONUS 1:
// Se non lo avevate già fatto aggiungete il loop infinito al carosello (e per loop infinito non intendo while(true) {…} :linguaccia_occhiolino:)

// BONUS 3:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// Usate un forEach al post del ciclo for per generare l’html delle slide

const carosello = document.querySelector(".image-wrapper")

console.log(slides)

slides.forEach(element => { 

    let htmlSlide = element
    const {image, title, text} = element
    
    for (let info in element){

        htmlSlide = `
        <div class="slide">
            <img class="image" src= "${image}" alt="">
            <article>
                <h1 class="title">${title}</h1>
                <p class="text">${text}</p>
            </article>
        </div>
        `
        //console.log(element)
       //console.log(element[info])
    }
    carosello.innerHTML += htmlSlide
});

activeSlide = document.querySelector(".slide")
activeSlide.classList.add("active")







slide = document.getElementsByClassName("slide");
// console.log(slides[attivo]);

let evaristo = document.getElementById("evaristo")

let ernesto = document.getElementById("ernesto")


let attivo

attivo = 0

console.log(attivo, " indice all'inizio");


addClickSx(evaristo);

addClickDx(ernesto);








// FUNZIONI

// attribuisce ad un elemento la funzione di cambiare slide sx
function addClickSx(element) {
    element.addEventListener("click",
    function() {
        console.log("mi hai cliccato")
        clickSinistro()
    })
}


function addClickDx(element) {
    element.addEventListener("click",
    function() {
        console.log("mi hai cliccato")
        clickDestro()
    })
}


// scorre le slide verso la sinistra (precedente)
function clickSinistro() {
    
    if (attivo === 0) {
        slide[attivo].classList.remove("active");
        attivo = attivo + slides.length - 1;
        slide[attivo].classList.add("active");

    } else if (attivo <= slides.length - 1) {
        slide[attivo].classList.remove("active");
        attivo = attivo - 1;
        slide[attivo].classList.add("active");
    }
}


//scorre le slides verso la destra (successiva)
function clickDestro() {
     
    if (attivo >= slides.length - 1) {
        slide[attivo].classList.remove("active");
        attivo = attivo - (slides.length);
        console.log(attivo);
    } else if (attivo == -1) {
        slide[attivo].classList.remove("active");
        attivo = 0;
        console.log(attivo);
        slide[attivo].classList.add("active");
    }

    else
    slide[attivo].classList.remove("active");
    attivo = attivo + 1;
    slide[attivo].classList.add("active");

}

