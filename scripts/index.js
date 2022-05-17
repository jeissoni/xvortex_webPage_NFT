const loading = document.getElementById("loading");
const parrafo = document.getElementById("parrafo");
const logo = document.getElementById("logo");
const content = document.getElementById("content");
const content2 = document.getElementById("content2");
const footer = document.getElementById("footer");
const audio = document.getElementById("audio");
const descripcion = document.getElementById("descripcion");
const botton = document.getElementById("botton");
const muteButtom = document.getElementById('controlSonido')

const text =
    "The year is 3055." +
    "Exul is the 4th planet in the Sericom galaxy where a solar year takes 700 days." +
    "Humanity was devasted by wars and different viruses that impede human reproduction." +
    "And here is where the adventure begins.";

let i = 0;

const text2 =
    "So it beggins." +
    "Life Out, a NFT proyect." +
    "We're in the first generation 'The Genesis One'." +
    "these will be lounched in June 30th, with a price of 0,3 ETH.";

muteButtom.addEventListener('click', (element) => {
    if(muteButtom.className === 'muted'){
        muteButtom.classList.remove('muted')
        muteButtom.classList.add('unmuted')
        return  audio.muted = false
    }else{
        muteButtom.classList.add('muted')
        muteButtom.classList.remove('unmuted')
        return  audio.muted = true
    }
    
})

function dealay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}

let timeDelay = 0;
let time = 10;

async function typeWriter() {
    if (i < text.length) {
        if (text[i] == ".") {
            try{
                audio.pause();
            }catch(error){
                console.log(error)
            }
            parrafo.innerHTML += text[i];
            await dealay(timeDelay);
            parrafo.innerHTML += "<br><br>";
        } else {
            try{
                audio.play();
            }catch(error){
                console.log(error)
            }
            parrafo.innerHTML += text[i];
        }
        i++;
        setTimeout(typeWriter, time);
    } else {
        botton.firstElementChild.innerHTML = "NEXT >";
        botton.style.display = "flex";
        footer.style.display = 'flex';
        await dealay(0);
        botton.style.opacity = "1";
        footer.style.opacity = "1";
        i = 0;
    }
}

async function typeWriter2() {
    
    if (i < text2.length) {
        if (text2[i] == ".") {
            try{
                audio.pause();
            }catch(error){
                console.log(error)
            }
            descripcion.innerHTML += text2[i];
            await dealay(timeDelay);
            descripcion.innerHTML += "<br><br>";
        } else {
            try{
                audio.play();
            }catch(error){
                console.log(error)
            }
            descripcion.innerHTML += text2[i];
        }
        i++;
        setTimeout(typeWriter2, time);
    } else {
        botton.style.opacity = "1";
        botton.firstElementChild.innerHTML = "< PREVIUS";
        i = 0;
    }
}

function opacidad() {
    logo.style.opacity = ".2";
    content.style.display = "flex"; 
    typeWriter();
}

window.addEventListener("load", () => {
    logo.style.opacity = "1";
    logo.style.top = "0";
    setTimeout(opacidad, 2000);
});

async function borrar(parrafo) {
    let element = parrafo;

    function typeDelete() {
        let last = element.innerHTML.length - 1;

        if (parrafo.innerHTML !== "") {
            audio.play();

            element.innerHTML = element.innerHTML.substring(0, last);

            setTimeout(typeDelete, 1);
        } else {
            try{
                audio.pause();
            }catch(error){
                console.log(error)
            }
            audio.muted = true;
        }
    }

    typeDelete();
}

botton.addEventListener("click", async () => {

    if (botton.classList[1] == "bnt-next") {
        botton.style.opacity = "0";
        await dealay(1);
        content.classList.remove("visible");
        content2.classList.add("visible");
        typeWriter2();
        botton.classList.remove("bnt-next");
        return botton.classList.add("bnt-previous");
    }

    if (botton.classList[1] == "bnt-previous") {
        content.classList.add("visible");
        botton.firstElementChild.innerHTML = "NEXT >";
        content2.classList.remove("visible");
        timeDelay = 0;
        time = 0;
        typeWriter();
        botton.classList.add("bnt-next2");
        return botton.classList.remove("bnt-previous");
    }

    if (botton.classList[1] == "bnt-next2") {
        console.log("next");
        content.classList.remove("visible");
        content2.classList.add("visible");
        botton.firstElementChild.innerHTML = "< PREVIUS";
        botton.classList.remove("bnt-next2");
        return botton.classList.add("bnt-previous2");
    }

    if (botton.classList[1] == "bnt-previous2") {
        console.log("previus");
        content2.classList.remove("visible");
        content.classList.add("visible");
        botton.firstElementChild.innerHTML = "NEXT >";
        botton.classList.add("bnt-next2");
        return botton.classList.remove("bnt-previous2");
    }

    
});
