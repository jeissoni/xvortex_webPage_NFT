//Animacion parrafo pagina 1//
const parrafo = document.querySelector(".parrafo");
const translatetexts = document.querySelectorAll('.traducir')
const menuContainer = document.querySelector('.menu-container')
const botones = document.querySelector('.botones')
const idioma = document.querySelector('.language')
const particles = document.getElementById('particles-js')
const earthquake = document.querySelector('.earthquake')
const video = document.getElementById('video')
const history = document.querySelector('.history')
const questions = document.querySelector('.about')
const aboutus = document.querySelector('.team-container')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

function showButtons(){
  botones.classList.toggle('visible')
}

setTimeout(() => {
    video.playbackRate = 2.0
    particles.style.opacity = '1'
    earthquake.style.zIndex = '0'
    earthquake.style.position = 'static'
}, 15000)

function dealay(n) {
  return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
  });
}

async function language(element){
  const requestJson = await fetch(`../languages/${element}.json`)
  const texts = await requestJson.json()

  for( const translatetext of translatetexts ){
    const section = translatetext.dataset.content
    const type = translatetext.dataset.type

    translatetext.innerHTML = texts[section][type]
  }
}

idioma.addEventListener('click', (e) => {
  if(e.target.dataset.function === 'en'){
    language(e.target.dataset.function)
  }


  if(e.target.dataset.function === 'es'){
    language(e.target.dataset.function)
  }
  
})

menuContainer.onclick = showButtons
