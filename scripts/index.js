const translatetexts = document.querySelectorAll("[data-content]");
const menuContainer = document.querySelector(".menu-container");
const botones = document.querySelector(".botones");
const idioma = document.querySelector(".language");
const particles1 = document.getElementById("particles-js");
const earthquake = document.querySelector(".earthquake");
const video = document.getElementById("video");
const videoMovil = document.getElementById("videoMovil");
const videoTrailer = document.getElementById("trailer");
const playTrailer = document.querySelector(".play");
const textTrailer = document.querySelector(".containerBtnPlay h2");
const videoTrailerMovil = document.getElementById("trailer2");
const playTrailerMovil = document.querySelector(".play2");
const textTrailerMovil = document.querySelector(".containerBtnPlay2 h2");
let userPlaytVideo = false;
let userPlaytVideoMovil = false;

// navbar hamburger icon

botones.addEventListener("click", (e) => {
  e.target.classList.forEach((clase) => {
    if (clase === "boton") {
      botones.classList.toggle("visible");
    }
  });
});

function showButtons() {
  botones.classList.toggle("visible");
}

menuContainer.onclick = showButtons;

// logo particles efect

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
let animationFrame
let adjustX = 2
let adjustY = 3
let showLogo = false

// handle maouse
const mouse = {
    x: null,
    y: null,
    radius: 100
}

// handle source of the videos acording to window size

if(window.innerWidth > 600){
  // fissure 
  video.setAttribute('src', '/video/grieta.mp4')
  video.classList.add('pc')
  video.classList.remove('movil')
  // trailer
  videoTrailer.setAttribute('src', 'video/trailer.mp4')
  videoTrailer.classList.add('pc')
  videoTrailer.classList.remove('movil')
  videoTrailer.setAttribute('poster', 'img/portada.png')
}

if(window.innerWidth < 600){
  // fisure
  video.setAttribute('src', 'video/grietaMovil.mp4')
  video.classList.remove('pc')
  video.classList.add('movil')
  // trailer
  videoTrailer.setAttribute('src', 'video/trailerMovil.mp4')
  videoTrailer.classList.remove('pc')
  videoTrailer.classList.add('movil')
  videoTrailer.setAttribute('poster', 'img/portadaVideoMovil.png')

}


window.addEventListener('resize', () => {
  cancelAnimationFrame(animationFrame)
  canvas.width = window.innerWidth
  if(showLogo){
    fillCanvas()
    init()
    animate()
  }
  // make the videos responsive

  if(window.innerWidth < 600 && video.className == 'pc'){
    video.setAttribute('src', 'video/grietaMovil.mp4')
    video.classList.remove('pc')
    video.classList.add('movil')
  }
  if(window.innerWidth > 600 && video.className == 'movil'){
    showLogo = false
    video.setAttribute('src', '/video/grieta.mp4')
    video.classList.add('pc')
    video.classList.remove('movil')
  }
  if(window.innerWidth < 600 && videoTrailer.className == 'pc'){
    userPlaytVideo = false
    videoTrailer.setAttribute('src', 'video/trailerMovil.mp4')
    videoTrailer.setAttribute('poster', 'img/portadaVideoMovil.png')
    videoTrailer.classList.remove('pc')
    videoTrailer.classList.add('movil')
    playTrailer.style.display = "block";
    textTrailer.style.display = "block";
  }
  if(window.innerWidth > 600 && videoTrailer.className == 'movil'){
    userPlaytVideo = false
    videoTrailer.setAttribute('src', 'video/trailer.mp4')
    videoTrailer.setAttribute('poster', 'img/portada.png')
    videoTrailer.classList.add('pc')
    videoTrailer.classList.remove('movil')
    playTrailer.style.display = "block";
    textTrailer.style.display = "block";
  }
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
})

function fillCanvas(){
  ctx.fillStyle = 'white'
  ctx.font = '80px Long-shot'
  ctx.fillText('LIFE', (canvas.width / 4) - 50 , 255)
  ctx.fillText('OUT', (canvas.width / 4) - 40, 320)
  textCoordinates = ctx.getImageData(0, 90, (canvas.width / 2), 250)
}

video.addEventListener('ended',() => {
  showLogo = true
  fillCanvas()
  init()
  animate()
})
class Particle {
    constructor( x, y ){
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 4
        this.baseX = x
        this.baseY = y
        this.density = (Math.random() * 40) + 1
        this.opacity = 0
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
    }
    update(){
        // let dx = mouse.x - this.x
        // let dy = mouse.y - this.y
        // let distance = Math.sqrt(dx * dx + dy *dy)
        // let forceDirectionX = dx / distance
        // let forceDirectionY = dy / distance
        // let maxDistance = mouse.radius
        // let force = (maxDistance - distance) / maxDistance
        // let directionX = forceDirectionX * force * this.density
        // let directionY = forceDirectionY * force * this.density
        // if(distance < mouse.radius){
        //     this.x -= directionX
        //     this.y -= directionY
        // }
        if(this.opacity < 1){
          this.opacity += 0.005
          ctx.fillStyle = 'rgba(241, 243, 245,' + this.opacity +')'
        }
        if(this.x !== this.baseX){
          let dx = this.x - this.baseX
          this.x -= dx / 20
        }
        if(this.y !== this.baseY){
          let dy = this.y - this.baseY
          this.y -= dy / 20
        } 
        
    }
}

function init(){
    particleArray = []
    for( let y = 0; y < textCoordinates.height; y++){
        for(let x = 0; x < textCoordinates.width; x++ ){
            if(textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128){
                let positionX = x
                let positionY = y
                particleArray.push( new Particle(positionX * adjustX, positionY * adjustY))
            }
        }
    }
}



function animate(){
  ctx.clearRect( 0, 0, canvas.width, canvas.height)
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].draw()
        particleArray[i].update()
    }
    animationFrame = requestAnimationFrame(animate)
}

// change language

async function language(element) {
  const requestJson = await fetch(`../languages/${element}.json`);
  const texts = await requestJson.json();

  for (const translatetext of translatetexts) {
    const section = translatetext.dataset.content;
    const type = translatetext.dataset.type;

    translatetext.innerHTML = texts[section][type];
  }
}

idioma.addEventListener("click", (e) => {
  if (e.target.dataset.function === "en") {
    language(e.target.dataset.function);
  }

  if (e.target.dataset.function === "es") {
    language(e.target.dataset.function);
  }
});

// efecto scroll

const articulo = document.getElementById("articulo");
document.addEventListener("scroll", () => {
  let position = window.scrollY / 500;
  if (position <= 1) {
    articulo.style.opacity = `${position}`;
  }
  if (position >= 1) {
    articulo.style.opacity = "1";
  }
});

// stop video when is off screen

function playandPause(entradas) {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting && userPlaytVideo) {
      videoTrailer.play();
    } else {
      videoTrailer.pause();
    }
  });
}

const observer = new IntersectionObserver(playandPause, {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
});

observer.observe(videoTrailer);

// playvideo button

function playvideo() {
  videoTrailer.play();
  userPlaytVideo = true;
}

playTrailer.onclick = playvideo;

// show play icon when video is stoped

videoTrailer.addEventListener("ended", () => {
  playTrailer.style.display = "block";
  textTrailer.style.display = "block";
});
videoTrailer.addEventListener("pause", () => {
  playTrailer.style.display = "block";
  textTrailer.style.display = "block";
});
videoTrailer.addEventListener("play", () => {
  playTrailer.style.display = "none";
  textTrailer.style.display = "none";
});


