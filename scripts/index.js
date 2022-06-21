//Animacion parrafo pagina 1//
const translatetexts = document.querySelectorAll('[data-content]')
const menuContainer = document.querySelector('.menu-container')
const botones = document.querySelector('.botones')
const idioma = document.querySelector('.language')
const particles = document.getElementById('particles-js')
const earthquake = document.querySelector('.earthquake')
const video = document.getElementById('video')
const videoMovil = document.getElementById('videoMovil')
const videoTrailer = document.getElementById('trailer')
const playTrailer = document.querySelector('.play')
const textTrailer = document.querySelector('.containerBtnPlay h2')
const videoTrailerMovil = document.getElementById('trailer2')
const playTrailerMovil = document.querySelector('.play2')
const textTrailerMovil = document.querySelector('.containerBtnPlay2 h2')

let userPlaytVideo = false
let userPlaytVideoMovil = false

// show particles

setTimeout(() => {
  particles.style.opacity = '1'
}, 15000)
// navbar hamburger icon

botones.addEventListener("click", (e) => {
  e.target.classList.forEach((clase) => {
    if (clase === "boton") {
      botones.classList.toggle('visible')
    }
  })
})

function showButtons(){
  botones.classList.toggle('visible')
}

menuContainer.onclick = showButtons

// speed video

videoMovil.playbackRate = 2.0
video.playbackRate = 2.0

// change language

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

// efecto scroll

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

// stop video when is off screen

// pc video

function playandPause(entradas){
  entradas.forEach((entrada) => {
  
    if(entrada.isIntersecting && userPlaytVideo){
      
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

// movil video

function playandPauseMovil(entradas){
  entradas.forEach((entrada) => {
 
    if(entrada.isIntersecting && userPlaytVideoMovil){

      videoTrailerMovil.play()

    }else {
      videoTrailerMovil.pause()
    }
  });
}

const observer2 = new IntersectionObserver( playandPauseMovil, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
})

observer2.observe(videoTrailerMovil)

// playvideo button

function playvideo(){
  videoTrailer.play()
  userPlaytVideo = true
}
function playvideoMovil(){
  videoTrailerMovil.play()
  userPlaytVideoMovil = true
}

playTrailerMovil.onclick = playvideoMovil
playTrailer.onclick = playvideo

// show play icon when video is stoped

videoTrailer.addEventListener('ended', () => {
  playTrailer.style.display = 'block'
  textTrailer.style.display = 'block'
})
videoTrailerMovil.addEventListener('ended', () => {
  playTrailerMovil.style.display = 'block'
  textTrailerMovil.style.display = 'block'
})
videoTrailer.addEventListener('pause', () => {
  playTrailer.style.display = 'block'
  textTrailer.style.display = 'block'
})
videoTrailer.addEventListener('play', () => {
  playTrailer.style.display = 'none'
  textTrailer.style.display = 'none'
})
videoTrailerMovil.addEventListener('pause', () => {
  playTrailerMovil.style.display = 'block'
  textTrailerMovil.style.display = 'block'
})
videoTrailerMovil.addEventListener('play', () => {
  playTrailerMovil.style.display = 'none'
  textTrailerMovil.style.display = 'none'
})

//Codigo Minteo//

const botonConnect = document.querySelector('.botonConnect');
const installAlert = document.querySelector('.installAlert');
const connectWallet = document.querySelector('.wallet');
const closeAlert = document.querySelector('.closeAlert');
const connectedToMainet = document.querySelector('.connectedToMainet');
const disConnectedToMainet = document.querySelector('.disConnectedToMainet');
const showAlert = document.querySelector('.showAlert');


// login and logout

let isConnected = false

botonConnect.addEventListener('click',async function() {
  if (!isConnected){
    login()
  } else {
    //log out
    location.reload()
  }
})

async function login(){

  if(window.ethereum){

    permissions()
    changeChain()

  }else{
    installAlert.classList.add("showAlert")
  }
}

// get metamask permissions

async function permissions(){

  await window.ethereum
        .request({ method: 'wallet_requestPermissions',
                             params: [
                                  {
                                 eth_accounts: {}
                                  }
                                ]
                          })
        .then(() => {

            let catch1 = /^\w{5}/
            let catch2 = /\w{4}$/
            let test1 = ethereum.selectedAddress.match(catch1)
            let test2 = ethereum.selectedAddress.match(catch2)
            connectWallet.innerHTML = test1 + '...' + test2
            botonConnect.innerHTML = "Disconect"

            isConnected = true

        }).catch((x) => {
            console.log(x.message)
        })
}

// change web3 chain

async function changeChain(){
  ethereum.on('chainChanged', (chainId) => {

    if(chainId === '0x1'){

      connectedToMainet.classList.add("showAlert")

      setTimeout(() => {
        connectedToMainet.classList.remove("showAlert")
      }, 5000)


    }else{

      disConnectedToMainet.classList.add("showAlert")
      // setTimeout(() => {
      //   disConnectedToMainet.classList.remove("showAlert")
      // }, 5000)

    }

  });

  return await window.ethereum.request({
    "id": 1,
        "jsonrpc": "2.0",
        "method": "wallet_switchEthereumChain",
        "params": [
            {
            "chainId": "0x1",
            }
        ]
        })
        
}

//close alerts//
function installAlertOff() {
  disConnectedToMainet.classList.remove("showAlert")
}

closeAlert.onclick = installAlertOff