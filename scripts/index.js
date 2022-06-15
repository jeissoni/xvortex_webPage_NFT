//Animacion parrafo pagina 1//
const parrafo = document.querySelector(".parrafo");
const translatetexts = document.querySelectorAll('.traducir')
const menuContainer = document.querySelector('.menu-container')
const botones = document.querySelector('.botones')
const idioma = document.querySelector('.language')
const particles = document.getElementById('particles-js')
const earthquake = document.querySelector('.earthquake')
const video = document.getElementById('video')
const videoMovil = document.getElementById('videoMovil')
const videoContainer = document.querySelector('.advideo')
const videoTrailer = document.getElementById('trailer')
const playTrailer = document.querySelector('.play')
const textTrailer = document.querySelector('.containerBtnPlay h2')
const videoContainer2 = document.querySelector('.advideo2')
const videoTrailer2 = document.getElementById('trailer2')
const playTrailer2 = document.querySelector('.play2')
const textTrailer2 = document.querySelector('.containerBtnPlay2 h2')
const history = document.querySelector('.history')
const questions = document.querySelector('.about')
const aboutus = document.querySelector('.team-container')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

function showButtons(){
  botones.classList.toggle('visible')
}

videoMovil.playbackRate = 2.0
video.playbackRate = 2.0

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


function playandPause(entradas){
  entradas.forEach((entrada) => {
  
    if(entrada.isIntersecting){
      
      videoTrailer.play()

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

function playandPause2(entradas){
  entradas.forEach((entrada) => {
 
    if(entrada.isIntersecting){

      videoTrailer2.play()

    }else {
      videoTrailer2.pause()
    }
  });
}

const observer2 = new IntersectionObserver( playandPause2, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
})

observer2.observe(videoTrailer2)

videoTrailer.addEventListener('ended', () => {
  playTrailer.style.display = 'block'
  textTrailer.style.display = 'block'
})

videoTrailer2.addEventListener('ended', () => {
  playTrailer2.style.display = 'block'
  textTrailer2.style.display = 'block'
})

function playvideo(){
  videoTrailer.play()
  playTrailer.style.display = 'none'
  textTrailer.style.display = 'none'
}
function playvideo2(){
  videoTrailer2.play()
  playTrailer2.style.display = 'none'
  textTrailer2.style.display = 'none'
}

playTrailer2.onclick = playvideo2
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