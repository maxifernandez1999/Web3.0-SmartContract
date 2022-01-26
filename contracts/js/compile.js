//MAS INFORMACION EN NPM SOLD DOCUMENTACION

const path = require("path");
const fs = require("fs");
const solc = require("solc");

const myCoinPath = path.join(__dirname, '../MyCoin.sol');
const code = fs.readFileSync(myCoinPath, 'utf8');
var input = {
    language: 'Solidity',
    sources: {
      'MyCoin.sol': {
        content: code
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

//ABI
//OBJETO QUE INFORMA SOBRE EL SMART CONTRACT.
//LO QUE RETORNA. LO QUE RECIBE, ETC
const output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
// module.exports = {
//     abi: output.contracts['MyCoin.sol'].MyCoin.abi,
//     bytecode: output.contracts['MyCoin.sol'].MyCoin.evm.bytecode.object 
// }