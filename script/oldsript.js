console.log("ciao")

// MILESTONE 2
// Al click dell’utente sulle frecce (una a sinistra e una a destra), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. Attenzione quando arriviamo all’ultima slide e clicchiamo sulla freccia destra, o viceversa se siamo sulla prima e clicchiamo sulla freccia sinistra.

const caruselImg = ["./img/01.jpg",
"./img/02.jpg",
"./img/03.jpg",
"./img/04.jpg",
"./img/05.jpg"]


// CAROSELLO DELLE SLIDES 

const carosello = document.querySelector(".image-wrapper")

for (let i = 0; i < caruselImg.length; i++){
    const srcImg = caruselImg[i]

    htmlSlide = ""

if(i === 0) {
    const htmlSlide = `
    <div class="slide active">
        <img src="${srcImg}" alt="">
    </div>
    `
} else {

    const htmlSlide = `
    <div class="slide">
        <img src="${srcImg}" alt="">
    </div>
    `

}

    carosello.innerHTML += htmlSlide


}

let attivo
attivo = 0



console.log(attivo, " indice all'inizio");

let slides = document.getElementsByClassName("slide");
// console.log(slides[attivo]);

document.getElementById("evaristo")

let clickSinistro = evaristo.addEventListener("click", function(){
    console.log("cambio alla precedente immagine");

    if (attivo === 0){
    slides[attivo].classList.remove("active")
    attivo = attivo + slides.length-1
    slides[attivo].classList.add("active")
    } else if (attivo <= slides.length-1){
        slides[attivo].classList.remove("active")
        attivo = attivo - 1
        slides[attivo].classList.add("active")
    }

});


document.getElementById("ernesto")

let clickDestro = ernesto.addEventListener("click", function(){
    console.log("cambio alla seguente immagine");


    if (attivo >= slides.length-1){
        slides[attivo].classList.remove("active")
        attivo =  attivo - (slides.length)       
        console.log(attivo)
    } else if (attivo == -1){
        slides[attivo].classList.remove("active")
        attivo = 0
        console.log(attivo)
        slides[attivo].classList.add("active")
    } else

    slides[attivo].classList.remove("active")
    attivo = attivo + 1
    slides[attivo].classList.add("active")

});

















// MILESTONE 3
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito per generare il markup delle slide potete usare la concatenazione delle stringe, il template literal o il metodo createElement… a voi la scelta.
// Nel generare il murkup fate attenzione che solo una delle 5 slide deve avere la classe active e risultare quindi visibile…