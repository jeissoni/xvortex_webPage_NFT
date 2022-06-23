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
const btnConnectWallet = document.querySelector('.wallet');
const closeAlert = document.querySelector('.closeAlert');
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
const contractAdress = "0x65603dDC7ECC347e1a1b9494db7B90ff3f867F1A"
const contractAbi = [
  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amountSent",
              "type": "uint256"
          }
      ],
      "name": "IncorrectPayment",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "balanceOf",
              "type": "uint256"
          }
      ],
      "name": "NftLimitPerDirection",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "name": "NftSoldOut",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "NotFondsToTranfer",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "name": "SaleNotStarted",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "TokenDoesNotExist",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "UnsuccessfulPayout",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
          }
      ],
      "name": "ApprovalForAll",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "MintLifeOutGenesis",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
          }
      ],
      "name": "SetStartSale",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "WithdrawProceeds",
      "type": "event"
  },
  {
      "inputs": [],
      "name": "AVAILABLE_SUPPLY",
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
      "inputs": [],
      "name": "LIMIT_NFT_BY_ADDRES",
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
      "inputs": [],
      "name": "MINT_COST",
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
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "balanceOf",
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
      "inputs": [],
      "name": "baseURI",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "getApproved",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "operator",
              "type": "address"
          }
      ],
      "name": "isApprovedForAll",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
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
      "name": "name",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "ownerOf",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "revelate",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
          }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "operator",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
          }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "setBaseUri",
              "type": "string"
          }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
          }
      ],
      "name": "setRevelate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
          }
      ],
      "name": "setStartSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "startSale",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
          }
      ],
      "name": "supportsInterface",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
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
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "tokenURI",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "withdrawProceeds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }
]
const provider = new ethers.providers.Web3Provider(window.ethereum)   
const signer = provider.getSigner();


window.addEventListener("load", async function(e) {
  const contract = new ethers.Contract(contractAdress, contractAbi, provider);
  const token = await contract.tokenIdCounter()
  const totalNftSolds = token.toNumber() - 1

  nftSoldsItem.innerHTML = "NFTs Sold: " + totalNftSolds + " / 999"

  // if (totalNftSolds >= 9){
  //   nftSoldsItem.innerHTML = "Sold Out"
  //   btnMint.disabled = true
  // }
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

    if(chainId === '0x4'){

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
    "id": 4,
        "jsonrpc": "2.0",
        "method": "wallet_switchEthereumChain",
        "params": [
            {
            "chainId": "0x4",
            }
        ]
        })   
}

//close alerts no funciona, revisar//
closeAlert.addEventListener("click", function() {
  disConnectedToMainet.classList.remove("showAlert")
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
    if(ethereum.chainId === '0x4'){
      mint()
    } else {
      changeChain()
      mint()
    }
  } else {
    login()
    if(ethereum.chainId === '0x4'){
      mint()
    } else {
      changeChain()
      mint()
    }
  }
})



async function mint() {
  
  const contract = new ethers.Contract(contractAdress, contractAbi, signer);
  //costo en hex//
  const costoMint = await contract.MINT_COST()

  //costo x # de NFTs//
  let total = costoMint.mul(amountNfts)

  //costo en formato wei//
  // let valueWei = total.toNumber()

  //costo en formato ether//
  // let valEth = ethers.utils.formatEther(valueWei) 
  
  console.log(amountNfts)
  console.log(total)
  
  return await contract.mintLifeOutGenesis(amountNfts, {value: total})
    .then((tx) => {
      viewOnEtherscan.style.display = "block"
      viewOnEtherscan.href = "https://rinkeby.etherscan.io/tx/"
      viewOnEtherscan.href += tx.hash
    })
    .catch((x) => console.log(x.error.message))
}

//btn Refresh solds

async function nftSolds() { 
  const contract = new ethers.Contract(contractAdress, contractAbi, provider);
  const token = await contract.tokenIdCounter()
  const totalNftSolds = token.toNumber() - 1

  nftSoldsItem.innerHTML = "NFTs Sold: " + totalNftSolds + " / 999"

  if (totalNftSolds >= 999){
    nftSoldsItem.innerHTML = "Sold Out"
    btnMint.disabled = true
  }
}

btnRefresh.onclick = nftSolds





