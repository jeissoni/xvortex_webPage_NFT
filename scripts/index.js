const loading = document.getElementById("loading");
const parrafo = document.getElementById("parrafo");
const logo = document.getElementById("logo");
const content = document.getElementById("content");
const content2 = document.getElementById("content2");
const footer = document.getElementById("footer");
const audio = document.getElementById("audio");
const descripcion = document.getElementById("descripcion");
const bntNext = document.getElementById('bnt-next')
const section = document.getElementById('section')


const text =
  "The year is 3055." +
  "Exul is the 4th planet in the Sericom galaxy where a solar year takes 700 days." +
  "Humanity was devasted by wars and different viruses that impede human reproduction." +
  "And here is where the adventure begins.";

var i = 0;

const text2 = 

function dealay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

async function typeWriter(time) {
  if (i < text.length) {
    if (text[i] == ".") {
      audio.muted = true;
      parrafo.innerHTML += text[i];
      await dealay(0.8);
      parrafo.innerHTML += "<br><br>";
    } else {
      audio.muted = false;
      parrafo.innerHTML += text[i];
    }
    i++;
    setTimeout(typeWriter, time);
  } else {
    footer.style.opacity = "1";
  }
}

function opacidad() {
  logo.style.opacity = ".2";
  content.style.display = "flex";

  typeWriter(10 , 'parrafo');
}

window.addEventListener("load", () => {
  logo.style.opacity = "1";
  logo.style.top = "0";

  setTimeout(opacidad, 2000);
});

function borrar(parrafo){

    let element = parrafo.firstElementChild

    function typeDelete(){
    
        if(parrafo.innerHTML !== ''){
    
            let last = element.innerHTML.length - 1
    
            element.innerHTML = element.innerHTML.substring( 0, last)
    
            setTimeout(typeDelete, 1)
    
        }else{

            audio.muted = true;
            element.classList.remove('visible')

        }

    }

    typeDelete()

}


bntNext.addEventListener('click', () => {

    for(let i = 0 ; i < section.children.length; i++){
        
        if(section.children[i].classList[1] === 'visible'){

            borrar(section.children[i])

            

            if(section.children[i].previousElementSibling.tagName == 'DIV'){
                console.log(1)
                section.children[i].previousElementSibling.classList.add('visible')
                break
            }

            if(section.children[i].nextElementSibling.tagName == 'DIV'){
                console.log(1)
                section.children[i].nextElementSibling.classList.add('visible')
                break
            }

        }
    }

})


