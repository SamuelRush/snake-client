const stdin = process.stdin;

const handleUserInput = function() { //if control c is entered, exit
  stdin.on('data', (key) => {
    if (key === "\u0003") {
      process.exit();
    }
  });
}

const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  handleUserInput();
  stdin.resume();
  return stdin;
};



module.exports = {setupInput};