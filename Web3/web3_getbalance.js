const { ethers } = require('hardhat');
var Web3 = require('web3');
// // install web 3 
// // import web3
// // get contract abi and in seprate file
// // get contract address
// // [paste network link e.g bsc,rinkeby
// // create web3 instance/obj

// const senderAddress = "0x7ACf46627094FA89339DB5b2EB862F0E8Ea4D9fc"
// const receiverAddress = "0xcB0F0A1C76344e4920a7dd3BfAbE76f0199a9B98"
// const privateKey = 'a4f96c04ed56df73a0f1b36bcdac8b479f75d08459817435e3b2b95c8d49724c';
// const rpcURL = 'https://ropsten.infura.io/v3/123389d74b244386b25bf49bdd6d5f12';



// var ERC20ABI = require('./ERC20ABI');
// // console.log('ERC20ABI',ERC20ABI);
// // var DAI = require('./Address');
// // console.log('ERC20',DAI);
// var busd = require('./Address');
// // console.log('busd Token', busd);
// // var owner = require('./Address');                                          
// // console.log('owner', owner);
// // Creating web3 instance
// const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')
// // console.log("web 3 instance ",web3.eth)
// const contractInstance = new web3.eth.Contract(ERC20ABI,busd)
// // const daiToken = new web3.eth.contract(ERC20ABI, DAI);
// // console.log('web3 instance',contractInstance.methods);

// const expectedBlockTime = 1000; 
// const sleep = (milliseconds) => {
// console.log('sleeping')
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

// async function fetchMethods(){

//     // const name = await contractInstance.methods.name().call();
//     // console.log("token name", name);

//     // const supply = await contractInstance.methods.totalSupply().call();
//     // console.log("supply",supply);

//     // let starting_balance = await contractInstance.methods.balanceOf(receiverAddress).call();
//     // console.log('balance', starting_balance);

    


//     let starting_balance = await daiToken.methods.balanceOf(receiverAddress).call();
//     daiToken.methods.transfer(receiverAddress, "1000000000000000000").send({from: senderAddress}, async function(error, transactonHash) {
//         console.log("Submitted transaction with hash: ", transactonHash)
//         let transactionReceipt = null
//         while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
//             transactionReceipt = await web3.eth.getTransactionReceipt(transactonHash);
//             await sleep(expectedBlockTime)
//         }
//         console.log("Got the transaction receipt: ", transactionReceipt)
//         let final_balance = await daiToken.methods.balanceOf(receiverAddress).call();
//         console.log('Starting balance was:', starting_balance);
//         console.log('Ending balance is:', final_balance);
//     });  
// }
// fetchMethods()




const rpcURL = 'https://data-seed-prebsc-1-s1.binance.org:8545'; 
const web3 = new Web3(rpcURL);
const address = '0x7ACf46627094FA89339DB5b2EB862F0E8Ea4D9fc' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
    console.log('Balance in wei', wei);
    balance = web3.utils.fromWei(wei, 'ether')
    console.log('Balance in eth', balance);
})


