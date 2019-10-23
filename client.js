const net = require('net');
const IP = require('./constants').IP;
const PORT = require('./constants').PORT;

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write('Name: SAM');
    console.log("Successfully Connected to game server");
  })

  return conn;
}
module.exports = {connect};