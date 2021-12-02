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



const handleUserInput = function (key) {
  //process.stdout.write(key);
  switch (key) {
    case "w":
      connection.write("Move: up");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case '\u0003':
      process.exit();
      break;
  }
//   if (key === '\u0003') {
//     process.exit();

// }
}
module.exports={setupInput}