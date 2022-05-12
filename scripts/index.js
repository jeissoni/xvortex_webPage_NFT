const loading = document.getElementById("loading");
const parrafo = document.getElementById("parrafo");
const logo = document.getElementById("logo");
const content = document.getElementById("content");
const footer = document.getElementById("footer");
const audio = document.getElementById("audio");

const text =
  "The year is 3055." +
  "Exul is the 4th planet in the Sericom galaxy were a solar year takes 700 days." +
  "Humanity was devasted by wars and different viruses that impede human reproduction." +
  "And here is where the adventure begins.";

var i = 0;

function dealay(n){
    return new Promise(function(resolve){
        setTimeout(resolve, n*1000)
    })
}

async function typeWriter() {
  if (i < text.length) {
    if (text[i] == ".") {
        audio.muted = true;
        parrafo.innerHTML += text[i];
        await dealay(.8)
        parrafo.innerHTML += "<br><br>";
    } else {
        audio.muted = false;
        parrafo.innerHTML += text[i];
    }
    i++;
    setTimeout(typeWriter, 70);
  } else {
    
    loading.style.opacity = "1";
    footer.style.opacity = "1";
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
