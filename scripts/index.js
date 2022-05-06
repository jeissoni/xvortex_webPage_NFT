const popup = document.getElementById('conectWallet')
const itemClose = document.getElementById('close')
const connect = document.getElementById('connect')
const itemMint = document.getElementById('bnMint')
const alerts = document.getElementById('alerts')
const cntAlert = document.getElementById('cntAlert')
const dcntAlert = document.getElementById('dcntAlert')
const alrClose = document.getElementById('alrClose')

itemClose.addEventListener('click', function(){
    popup.classList.remove('visible')
})

alrClose.addEventListener('click', function(){
    dcntAlert.classList.remove('show2')
})


connect.addEventListener('click', function() {
  if(itemMint.classList.length == 1){
    login()
  }else{
    logout()
  }
})

ethereum.on('connect', info => console.log(`connect to ${info.chainId}`))

ethereum.on('disconnect', err => console.log(err))

let chainId

async function login(){

    if(window.ethereum){
  
      await window.ethereum
                  .request({ method: 'wallet_requestPermissions',
                             params: [
                                  {
                                 eth_accounts: {}
                                  }
                                ]
                          })

      await window.ethereum.request({
            "id": 1,
                "jsonrpc": "2.0",
                "method": "wallet_switchEthereumChain",
                "params": [
                    {
                    "chainId": "0x1",
                    }
                ]
                })

    console.log(ethereum.selectedAddress)

    itemMint.classList.add('walletAddress')

    popup.classList.remove('visible')

    let catch1 = /^\w{5}/

    let catch2 = /\w{4}$/
            
    let test1 = ethereum.selectedAddress.match(catch1)

    let test2 = ethereum.selectedAddress.match(catch2)

    itemMint.innerHTML = test1 + '...' + test2

    ethereum.on('accountsChanged', () => {

      test1 = ethereum.selectedAddress.match(catch1)

      test2 = ethereum.selectedAddress.match(catch2)

      itemMint.innerHTML = test1 + '...' + test2

    })

    console.log( ethereum.isConnected())

    

      ethereum.on('chainChanged', (chainId) => {

          if(chainId === '0x1'){

              dcntAlert.classList.remove('show2')
              cntAlert.classList.add('show')
              cntAlert.style.zIndex = 10
              setTimeout(() => {
                  cntAlert.classList.remove('show'); 
                  cntAlert.style.zIndex = 0
                }, 4000)

          }else{

            cntAlert.style.zIndex = 0
            dcntAlert.classList.add('show2')

          }
      });

      chainId = await ethereum.request({ method: 'eth_chainId' });
      
    //   const provider = new ethers.providers.Web3Provider(window.ethereum)
      
    //   const signer = provider.getSigner();
  
    //   const contract = new ethers.Contract(address, abi, signer);
  
    //   const name = await contract.tokenURI(1)

    }else{
      console.log('install metamask')
    }
  
  
  }

  function logout(){
    
    popup.classList.remove('visible')
    itemMint.classList.remove('walletAddress')
    itemMint.innerHTML = 'Conect Wallet'

  }

 console.log( ethereum.isConnected())

  
// const observer = new MutationObserver((mutationlist) => {
//   mutationlist.forEach((mutation) => {
//     if(ethereum.selectedAddress){
//       console.log(ethereum.selectedAddress, mutation)
//     }
//   })
// })

// const observerOptions = {
//   attributes: true,
//   childList: true,
// }

// address = { address: ethereum.selectedAddress}

// observer.observe(address , observerOptions)

document.addEventListener('DOMContentLoaded', function() {
  if(ethereum.isConnected()){
    console.log(1)
  }
})



