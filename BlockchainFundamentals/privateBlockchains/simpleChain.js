const SHA256 = require("crypto-js/sha256")

class Block{

    constructor(data){
  
        this.height= 0,
        this.body=data,
        this.time=0,
        this.previousBlockHash= "0X",
        this.hash= ""

    }
}

class Blockchain{
    constructor(){
        this.chain=[]
        this.addBlock(new Block("First Block In THe chains - Genesis BLOck"))
    }

    addBlock(newBlock){
        newBlock.height=this.chain.length;
        newBlock.time=new Date().getTime().toString().slice(0,-3);
        if (this.chain.length>0){
            newBlock.previousBlockHash = this.chain[this.chain.length-1].hash
        }
        
        newBlock.hash=SHA256(JSON.stringify(newBlock)).toString()
        this.chain.push(newBlock);
    }
}

let blockchain = new Blockchain()
console.log(blockchain)
blockchain.addBlock(new Block('test'))
blockchain.addBlock(new Block('widadtest'))
console.log(blockchain)