const popup = document.getElementById('conectWallet')
const itemClose = document.getElementById('close')
const connect = document.getElementById('connect')
const itemMint = document.getElementById('bnMint')
const alerts = document.getElementById('alerts')
const cntAlert = document.getElementById('cntAlert')
const dcntAlert = document.getElementById('dcntAlert')
const alrClose = document.getElementById('alrClose')

itemMint.addEventListener('click', function(){
    popup.classList.add('visible')
})

itemClose.addEventListener('click', function(){
    popup.classList.remove('visible')
})

alrClose.addEventListener('click', function(){
    dcntAlert.classList.remove('show2')
    console.log(1)
})

connect.addEventListener('click', () => login())

let chainId

async function login(){

    if(window.ethereum){

      let flag = false
  
      await window.ethereum
                  .request({ method: 'wallet_requestPermissions',
                             params: [
                                  {
                                 eth_accounts: {}
                                  }
                                ]
                          })
                  .then(flag = true)
  
      if(flag){
  
      const accounts = await window.ethereum
                             .request({ method: 'eth_requestAccounts' })
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

    //   ethereum.on('connect', info => console.log(`connect to${info}`))

    //   ethereum.on('disconnect', err => console.log(`disconnect to${err}`))

      ethereum.on('chainChanged', (chainId) => {
          if(chainId === '0x1'){

              dcntAlert.classList.remove('show2')
              cntAlert.classList.add('show')
              cntAlert.style.zIndex = 10
              setTimeout(() => {
                  cntAlert.classList.remove('show'); 
                  cntAlert.style.zIndex = 0
                }, 4000)
              console.log(dcntAlert.classList)
              console.log(cntAlert.classList)

          }else{

            cntAlert.style.zIndex = 0
            dcntAlert.classList.add('show2')
            console.log(dcntAlert.classList)

          }
      });

      chainId = await ethereum.request({ method: 'eth_chainId' });

      window.userWalletAddress = accounts[0]
      
    //   const provider = new ethers.providers.Web3Provider(window.ethereum)
      
    //   const signer = provider.getSigner();
  
    //   const contract = new ethers.Contract(address, abi, signer);
  
    //   const name = await contract.tokenURI(1)
  
    }

    }else{
      console.log('install metamask')
    }
  
  
  }




