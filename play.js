const { connect } = require('./client');
const {setupInput} = require('./input');
const client = connect();

// setup interface to handle user input from stdin
//-------- connection event------------
client.on("connect", () => {
  console.log("successfully connected to game server");
  client.write("Name:sk@");

})

setupInput(client);

