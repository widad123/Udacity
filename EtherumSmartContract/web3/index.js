var Web3=require("web3")
var EthereumTransaction=require("ethereumjs-tx").Transaction
var web3 = new Web3("HTTP://127.0.0.1:8545")

var sendingAddress="0x246da99327c7Aa0eB359fd01587126c91fe09210"

var receivingAddress="0x156620DDF924902Af97C9f4553e701297AF176A2"

web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

var rawTransaction = { 
    nonce: '0x00',
    to: receivingAddress,
    gasPrice: '0x20000000',
    gasLimit: '0x30000',
    value: '0x01',
    data: "0x000" 
   }

var privateKeySender="d1e5739b860298204d850dec22674dbdd6b7253618da02cbffdbe64d5181defd"
var privateKeySenderHex= new Buffer(privateKeySender,'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

var serializedTransaction =transaction.serialize()
web3.eth.sendSignedTransaction(serializedTransaction)