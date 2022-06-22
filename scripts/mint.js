//Animacion parrafo pagina 1//
const translatetexts = document.querySelectorAll('[data-content]')
const menuContainer = document.querySelector('.menu-container')
const botones = document.querySelector('.botones')
const idioma = document.querySelector('.language')
const particles = document.getElementById('particles-js')

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
      setTimeout(() => {
        disConnectedToMainet.classList.remove("showAlert")
      }, 5000)

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

//close alerts no funciona, revisar//
closeAlert.addEventListener("click", function() {
  disConnectedToMainet.classList.remove("showAlert")
})

