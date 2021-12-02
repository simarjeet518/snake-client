const { connect } = require('./client');
let interval = 50;
const client = connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
client.on("connect", () => {
  console.log("successfully connected to game server");
  client.write("Name:sk@");

})
const handleUserInput = function (key) {
     process.stdout.write(key);
     if (key === '\u0003') {
      
       client.on('end', () => {
       console.log('Game Ended by user');
       process.exit();
    });
  }
}
setupInput();

//-------- connection event------------


//------------data event---------------
client.on("data", (data) => {
  console.log(data);

});
// client.on('end', () => {
//   console.log('disconned from server');
// })
