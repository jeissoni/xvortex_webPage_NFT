//Animacion parrafo pagina 1//
const loading = document.getElementById("loading");
const parrafo = document.getElementById("parrafo");
const logo = document.getElementById("logo");
const content = document.getElementById("content");
const textoScroll = document.querySelector('.textoScroll')
const footer = document.getElementById("footer")
const parrafo2 = document.getElementById("parrafo2");
const textoScroll2 = document.querySelector('.textoScroll2')
const texto3 = document.getElementById("estesi")
const generation1 = document.querySelector('.generation1')
const textoScroll3 = document.querySelector('.textoScroll3')
const botton = document.getElementById('botton')
const muteButtom = document.getElementById('controlSonido')

const text = "The year is 3055." 
            +"Exul is the 4th planet in the Sericom galaxy were a solar year takes 700 days."          
            +"Humanity was devasted by wars and different viruses that impede human reproduction."          
            +"And here is where the adventure begins."

const text2 = "Life Out is a utility NFT Project created on the Ethereum chain aiming to create a Multiverse that will reside in the web3 community."
+ 
"We are community driven, so holdign an NFT from the collection will give you perks in the ecosystem."
+" Moreover, being part of the Genesis collection will bring you even more utility in future developments."
            

var i = 0;

muteButtom.addEventListener('click', () => {
  
  if(muteButtom.className === 'muted'){
      muteButtom.classList.remove('muted')
      muteButtom.classList.add('unmuted')
      console.log(1)
      return  audio.muted = false;
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

let timeDelay = 0.8;
let time = 70;

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
      await dealay(0);
      botton.style.opacity = "1";
      i = 0;
  }
}

function opacidad(){
    logo.style.opacity = ".2";
    content.style.display = "flex";
    typeWriter() 

}

window.addEventListener("load", () => {
  logo.style.opacity = "1";
  logo.style.top = "calc(50%/2)";

  setTimeout(opacidad, 2000);           

});

function borrar(parrafo) {
  let element = parrafo;

  function typeDelete() {
      let last = element.innerHTML.length - 1;

      if (parrafo.innerHTML !== "") {
        try{
          audio.play();
      }catch(error){
          console.log(error)
      }

          element.innerHTML = element.innerHTML.substring(0, last);

          setTimeout(typeDelete, 1);
      } else {
          try{
              audio.pause();
          }catch(error){
              console.log(error)
          }
          
      }
  }

  typeDelete();
}

botton.addEventListener("click", async () => {

  if (botton.classList[1] == "bnt-next") {
      botton.style.opacity = "0";
      borrar(parrafo);
      await dealay(1);
      parrafo.classList.remove("visible");
      parrafo2.classList.add("visible");
      typeWriter2();
      botton.classList.remove("bnt-next");
      return botton.classList.add("bnt-previous");
  }

  if (botton.classList[1] == "bnt-previous") {
      parrafo.classList.add("visible");
      botton.firstElementChild.innerHTML = "NEXT >";
      parrafo2.classList.remove("visible");
      timeDelay = 0;
      time = 0;
      typeWriter();
      
      botton.classList.add("bnt-next2");
      return botton.classList.remove("bnt-previous");
  }

  if (botton.classList[1] == "bnt-next2") {
      console.log("next");
      parrafo.classList.remove("visible");
      parrafo2.classList.add("visible");
      botton.firstElementChild.innerHTML = "< PREVIUS";
      botton.classList.remove("bnt-next2");
      return botton.classList.add("bnt-previous2");
  }

  if (botton.classList[1] == "bnt-previous2") {
      console.log("previus");
      parrafo2.classList.remove("visible");
      parrafo.classList.add("visible");
      botton.firstElementChild.innerHTML = "NEXT >";
      botton.classList.add("bnt-next2");
      return botton.classList.remove("bnt-previous2");
  }
});


//Animacion parrafo pagina 2 y 3//

async function typeWriter2() {
    
  if (i < text2.length) {
      if (text2[i] == ".") {
          try{
              audio.pause();
          }catch(error){
              console.log(error)
          }
          parrafo2.innerHTML += text2[i];
          await dealay(0.8);
          parrafo2.innerHTML += "<br><br>";
      } else {
          try{
              audio.play();
          }catch(error){
              console.log(error)
          }
          parrafo2.innerHTML += text2[i];
      }
      i++;
      setTimeout(typeWriter2, time);
  } else {
      botton.style.opacity = "1";
      textoScroll2.style.opacity = '1'
      botton.firstElementChild.innerHTML = "< PREVIUS";
      textoScroll.style.opacity = '1'
      footer.style.opacity = "1"
      i = 0;
  }
}

const info3 = (entradas) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      texto3.style.opacity = "1"
      generation1.style.opacity = "1"
    } else {
      
    }
  });
}

const observador2 = new IntersectionObserver(info3, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
})

observador2.observe(generation1)
observador2.observe(texto3)

//Animacion pagina 4 About Us//

const aboutus = document.querySelector(".aboutus")
const team = document.querySelector(".team")

const info4 = (entradas) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      aboutus.style.opacity = "1"
      team.style.opacity = "1"
      
      //setTimeout(typeWriter2, 500);
    } else {
      //parrafo2.style.opacity = "0"
    }
  });
}

const observador3 = new IntersectionObserver(info4, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
})

observador3.observe(aboutus)
observador3.observe(team)

