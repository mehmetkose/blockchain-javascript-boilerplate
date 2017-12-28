
import blockchain from './blockchain'

let fupioChain = new blockchain.Chain()
fupioChain.addBlock(new blockchain.Block(1, Date.now(), {"hello":"world2"}))
fupioChain.addBlock(new blockchain.Block(2, Date.now(), {"hello":"world3"}))

for (let block of fupioChain.chain) {
    console.log(JSON.stringify(block))
}

console.log(fupioChain.isChainValid())
