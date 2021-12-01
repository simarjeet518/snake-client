const net = require('net');

//connect with server
const connect = function () {
  const conn = net.createConnection({
    host:"10.0.2.15",
    port:50541
  });
  conn.setEncoding('utf-8');
  return conn;
}
console.log("connecting .....");
let client =connect();
client.on("data",(data)=>{
  console.log(data);

});
client.on('end',()=> {
  console.log('disconned from server');
})