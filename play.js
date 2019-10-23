const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (data) => { //if control c is entered, exit
    if (data === "\u0003") {
      process.exit();
    }
  })
  return stdin;
};
setupInput();
