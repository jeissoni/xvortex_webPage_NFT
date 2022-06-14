//Animacion parrafo pagina 1//
const parrafo = document.querySelector(".parrafo");
const translatetexts = document.querySelectorAll('.traducir')
const menuContainer = document.querySelector('.menu-container')
const botones = document.querySelector('.botones')
const idioma = document.querySelector('.language')
const particles = document.getElementById('particles-js')
const earthquake = document.querySelector('.earthquake')
const video = document.getElementById('video')
const videoContainer = document.querySelector('.advideo')
const videoTrailer = document.getElementById('trailer')
const playTrailer = document.querySelector('.play')
const pauseTrailer = document.querySelector('.pause')
const history = document.querySelector('.history')
const questions = document.querySelector('.about')
const aboutus = document.querySelector('.team-container')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

function showButtons(){
  botones.classList.toggle('visible')
}

video.playbackRate = 3.0
setTimeout(() => {
    particles.style.opacity = '1'
    earthquake.style.zIndex = '0'
    earthquake.style.position = 'fixed'
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

let bandera = false

function playandPause(entradas){
  entradas.forEach((entrada) => {
    if(videoTrailer.ended){
      playTrailer.style.display = 'block'
      bandera = false
    }
    if(entrada.isIntersecting){
      if(bandera && !videoTrailer.ended){
        videoTrailer.play()
      }
    }else {
      videoTrailer.pause()
    }
  });
}

const observer = new IntersectionObserver( playandPause, {
  root: null,
  rootMargin: '0px',
  threshold: 0.8
})

observer.observe(videoTrailer)

function playvideo(){
  videoTrailer.play()
  playTrailer.style.display = 'none'
  bandera = true
}

playTrailer.onclick = playvideo
menuContainer.onclick = showButtons

const articulo = document.getElementById('articulo')
document.addEventListener('scroll', () => {
  let position = window.scrollY / 500
  if(position <= 1){
    articulo.style.opacity = `${position}`
  }
  if(position >= 1){
    articulo.style.opacity = '1'
  }
})