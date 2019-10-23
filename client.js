const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.15.225',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write('Name: SAM');
    console.log("Successfully Connected to game server");
    //conn.write('Move: up goingUp');
    //conn.write('Move: right');
    //conn.write('Move: down');
    //conn.write('Move: left');
  })

  return conn;
}
module.exports = {connect};