const {keyObject} = require('./constants')
let connection ; 
 //stores active TCP connection
const setupInput = function (conn) {
  connection =conn;
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
let validKeys = [];
for(let keys in keyObject){
  validKeys.push(keys);
}

const handleUserInput = function (key) {
  if(key === '\u0003'){
    keyObject[key]();
 } else if(!(validKeys.includes(key))){   
   console.log("Invalid key pressed");
 } else
 {
  connection.write(keyObject[key]);
  }
}
module.exports={setupInput}