const IP ="10.0.2.15";
const  PORT = 50541 ;
const keyObject = {
  w:"Move: up",
  a:"Move: left",
  s:"Move: down",
  d:"Move: right",
  f:"Say: Hi",
'\u0003': ()=>  process.exit()
}

module.exports ={IP,PORT,keyObject}