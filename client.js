const net = require('net');
const {IP ,PORT} = require('./constants');
//connect with server
const connect = function () {
  const conn = net.createConnection({
    host:IP,
    port:PORT
  });
  conn.setEncoding('utf-8');
  return conn;
}
module.exports = {connect};