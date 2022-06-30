//Animacion parrafo pagina 1//
const translatetexts = document.querySelectorAll('[data-content]')
const menuContainer = document.querySelector('.menu-container')
const botones = document.querySelector('.botones')
const idioma = document.querySelector('.language')
const particles = document.getElementById('particles-js')


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

let selectedLanguage = "en"

idioma.addEventListener('click', (e) => {
  if(e.target.dataset.function === 'en'){
    language(e.target.dataset.function)
    selectedLanguage = "en"
  }

  if(e.target.dataset.function === 'es'){
    language(e.target.dataset.function)
    selectedLanguage = "es"
  }
  
})

//Codigo Minteo//

const botonConnect = document.querySelector('.botonConnect');
const installAlert = document.querySelector('.installAlert');
const btnConnectWallet = document.querySelector('.wallet');
const closeAlert = document.querySelectorAll('.closeAlert');
const connectedToMainet = document.querySelector('.connectedToMainet');
const disConnectedToMainet = document.querySelector('.disConnectedToMainet');
const showAlert = document.querySelector('.showAlert');
const amountContainer = document.querySelector('.amount');
const btnAdd = document.querySelector('.add');
const btnSubstract = document.querySelector('.subtract');
const btnMint = document.querySelector('.btnMint');
const viewOnEtherscan = document.querySelector('.viewOnEtherscan');
const btnRefresh = document.querySelector('.refresh');
const nftSoldsItem = document.querySelector('.solds');
const contractAdress = "0x08D05998Fe1eC6EB8c8858c4566d9842Cb01eA6C"
const contractAbi = [
    {
        "inputs": [],
        "name": "mintCost",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountNft",
                "type": "uint256"
            }
        ],
        "name": "mintLifeOutGenesis",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenIdCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
  
let provider,
    provider2,
    signer

window.addEventListener("load", async function(e) {
  if(window.ethereum){
        
        
        provider2 = ethers.getDefaultProvider()   
        

        const contract = new ethers.Contract(contractAdress, contractAbi, provider2);
        const token = await contract.tokenIdCounter()
        const totalNftSolds = token.toNumber() - 1

        if (selectedLanguage === "en"){
        nftSoldsItem.innerHTML = "NFTs Sold: " + totalNftSolds + " / 999"
        } else {
        nftSoldsItem.innerHTML = "NFTs Vendidos: " + totalNftSolds + " / 999"
        }
        
        if (totalNftSolds >= 999){
        nftSoldsItem.innerHTML = "Sold Out"
        btnMint.disabled = true
        btnAdd.disabled = true
        btnSubstract.disabled = true
        btnRefresh.disabled = true
        } else {
        btnAdd.disabled = false
        btnSubstract.disabled = false
        btnMint.disabled = false
        btnRefresh.disabled = false
        }
        
  } else {
      installAlert.classList.add("showAlert")
        
  }
})



//desabilitar botones en dispositivos moviles
window.addEventListener("resize", () => {
    if (window.innerWidth < 500){
        btnMint.disabled = true
        btnAdd.disabled = true
        btnSubstract.disabled = true
        btnRefresh.disabled = true
    } else {
        btnAdd.disabled = false
        btnSubstract.disabled = false
        btnMint.disabled = false
        btnRefresh.disabled = false
    }
})

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

    connectWallet()
    changeChain()

  }else{
    installAlert.classList.add("showAlert")
    
    
  }
}

// get metamask permissions

async function connectWallet(){

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
            btnConnectWallet.innerHTML = test1 + '...' + test2
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
    
      disConnectedToMainet.classList.remove("showAlert")
      connectedToMainet.classList.add("showAlert")
      connectedToMainet.style.zIndex = 50

      setTimeout(() => {
        
        connectedToMainet.classList.remove("showAlert")
        connectedToMainet.style.zIndex = 0
        
      }, 5000)

    }else{

      disConnectedToMainet.classList.add("showAlert")

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
    closeAlert.forEach((alert) => {
        alert.addEventListener('click', function() {
        connectedToMainet.classList.remove("showAlert")
        disConnectedToMainet.classList.remove("showAlert")
        installAlert.classList.remove("showAlert")
    })  
})

//NFT amount//

let amountNfts = Number(amountContainer.innerHTML)

btnSubstract.addEventListener('click', () => {
  if(amountNfts > 1){
      amountNfts--
      amountContainer.innerHTML = amountNfts
  }
})

btnAdd.addEventListener('click', () => {
  if(amountNfts < 3){
      amountNfts++
      amountContainer.innerHTML = amountNfts
  }
})

//btn Mint
btnMint.addEventListener("click", async() => {
  if(isConnected){
    if(ethereum.chainId === '0x1'){
        
      mint()
    } else {
      changeChain()
    }
  } else {
    disConnectedToMainet.classList.add("showAlert")
      
    
  }
})

async function mint() {

  provider = new ethers.providers.Web3Provider(window.ethereum)
  signer = provider.getSigner();   
  
  const contract = new ethers.Contract(contractAdress, contractAbi, signer);
  //costo en hex//
  const costoMint = await contract.mintCost()

  //costo x # de NFTs//
  let total = costoMint.mul(amountNfts)

  //costo en formato wei//
  // let valueWei = total.toNumber()

  //costo en formato ether//
  // let valEth = ethers.utils.formatEther(valueWei) 
  
  
  return await contract.mintLifeOutGenesis(amountNfts, {value: total})
    .then((tx) => {
      viewOnEtherscan.style.display = "block"
      viewOnEtherscan.href = "https://etherscan.io/tx/"
      viewOnEtherscan.href += tx.hash
    })
    .catch((x) => console.log(x.error.message))
}

//btn Refresh solds

async function nftSolds() { 
  const contract = new ethers.Contract(contractAdress, contractAbi, provider2);
  const token = await contract.tokenIdCounter()
  const totalNftSolds = token.toNumber() - 1

  if (selectedLanguage === "en"){
    nftSoldsItem.innerHTML = "NFTs Sold: " + totalNftSolds + " / 999"
  } else {
    nftSoldsItem.innerHTML = "NFTs Vendidos: " + totalNftSolds + " / 999"
  }

  if (totalNftSolds >= 999){
    nftSoldsItem.innerHTML = "Sold Out"
    btnMint.disabled = true
  }
}

btnRefresh.onclick = nftSolds





