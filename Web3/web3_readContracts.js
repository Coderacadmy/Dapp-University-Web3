// const { default: Web3 } = require("web3");
var Web3 = require('web3');

const rpcURL = 'https://data-seed-prebsc-1-s1.binance.org:8545'; 
const web3 = new Web3(rpcURL);
const address = '0x7ACf46627094FA89339DB5b2EB862F0E8Ea4D9fc' // Your account address goes here

var ERC20ABI = require('./ERC20ABI');
var busd = require('./Address');
const { ConstructorFragment } = require("ethers/lib/utils");
const { Contract } = require("ethers");

const contract = new web3.eth.Contract(ERC20ABI,busd)

// read total supply of token
contract.methods.totalSupply().call((err, result) => {
    if(!err){
    console.log('Result from contract:', result);
 }
});

// read the name of token
contract.methods.name().call((err, result) => {
    if(!err){
        console.log('Name of Contract:', result);
    }
});

// read the symbol of token
contract.methods.symbol().call((err, result) => {
    if(!err){
        console.log('Symbol of token:', result);
    }
})

// balance of specific address
contract.methods.balanceOf(address).call((err, result) =>{
    console.log('balance of 9FC account:', result);
})