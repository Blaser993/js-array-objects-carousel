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

        htmlSlide =
        `
        <div class="slide">
            
            <img class="image" src= "${image}" alt="">
            <article>
                <h1 class="title">${title}</h1>
                <p class="text hide">${text}</p>
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



addClickDx(ernesto)

addClickSx(evaristo)


// BONUS

let carusel = document.querySelector(".carusel")

let autoplay = setInterval(direction,3000)

carusel.addEventListener("mouseenter", () => {

    console.log("ti blocco l'autoplay")
    clearInterval(autoplay)
    autoplay = undefined
})

carusel.addEventListener("mouseleave", () => {

    console.log("ti resetto l'autoplay")
    autoplay = setInterval(direction,3000)
})





// cambio il senso di direzione dell'autoplay

let reverse = document.getElementById("shuffle")


direzione = "1" //verso destra, direzione ="0" -> verso sinistra




reverse.addEventListener("click",
function(){
    console.log("ho cambiato senso di marcia")

    if (direzione === "1"){
        direzione = "0"
    } else direzione = "1"

    direction();

})

















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
    
    
    console.log("vado indietro")
    
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

    
    
    console.log("vado avanti")
    

}

//decide il senso dell'autoplay

function direction() {
    switch (direzione) {
        case "1":
            clickDestro();
            break;
        case "0":
            clickSinistro();
            break;
    }
}