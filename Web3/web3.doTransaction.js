// var Tx = require('ethereumjs-tx');
const Tx = require("@ethereumjs/tx").Transaction;
var Web3 = require("web3");

var ERC20TransferABI = require('./ERC20ABI');
const BUSD = "0x47c815F9Eb5E25B6D03E7C5193128E58735e6419" 

const rpcURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
// const rpcURL = "https://ropsten.infura.io/v3/3586cd6127534be5bf56850b69e073c7";
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));



const account1 = "0x7ACf46627094FA89339DB5b2EB862F0E8Ea4D9fc";
const account2 = "0xcB0F0A1C76344e4920a7dd3BfAbE76f0199a9B98";
const PRIVATE_KEY =
  "0xa4f96c04ed56df73a0f1b36bcdac8b479f75d08459817435e3b2b95c8d49724c";

const privateKey1 = Buffer.from(PRIVATE_KEY, "hex");

web3.eth.getTransactionCount(account1, (err, txCount) => {
  console.log("Nonce value:", txCount);
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    from: account1,
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  };
 const abc = async() => {
    const signPromise = await web3.eth.accounts.signTransaction(txObject, PRIVATE_KEY)

    console.log(signPromise);
  
 }
//  abc();
//   const tx = new Tx(txObject, { chain: "bsc" });
//   // const tx = new TX(txObject);
//   tx.sign(privateKey1);

//   const serializedTx = signPromise.serialize();
//   const txHex = "0x" + serializedTx.toString("hex");
//   web3.eth.sendSignedTransaction(txHex, (error, txHash) => {
//     if (!error) {
//       console.log("transaction successful:", txHash);
//       // Now go check etherscan to see the transaction!
//     } else {
//       console.log("Transaction error:", error);
//     }
//   });
});


const contractaddress = async() => {
    const account1 = "0x7ACf46627094FA89339DB5b2EB862F0E8Ea4D9fc";
const account2 = "0xcB0F0A1C76344e4920a7dd3BfAbE76f0199a9B98";
const PRIVATE_KEY =
  "a4f96c04ed56df73a0f1b36bcdac8b479f75d08459817435e3b2b95c8d49724c";
    const contract = new web3.eth.Contract(ERC20TransferABI, BUSD)
    const nonce = await web3.eth.getTransactionCount(account1, "latest") //get latest nonce
    //Transaction
    const tx = {
        from: account1,
        to: account2,
        nonce: nonce,
        gas: 500000,
        data: contract.methods.transfer(account2, web3.utils.toWei("5000000000000000000", 'ether')).encodeABI(),
    }
    const signPromise =  web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    signPromise
    .then((signedTx) => {
        console.log(signedTx ,"signedTx")
        web3.eth.sendSignedTransaction(signedTx.rawTransaction)
            .on("transactionHash", function (hash) {
                console.log(["Trx Hash:" + hash]);
            })
            .on("receipt", async function (receipt)
{
                console.log(["Receipt:", receipt]);

            
 })
    })
    } 
contractaddress();