const stdin = process.stdin;
let connection;

const handleUserInput = function() { //if control c is entered, exit
  stdin.on('data', (data) => {
    if (data === "\u0003") {
      process.exit();
    }

    if (data === "w"){
      connection.write("Move: up");
    }
    if (data === "a"){
      connection.write("Move: left");
    }
    if (data === "s"){
      connection.write("Move: down");
    }
    if (data === "d"){
      connection.write("Move: right");
    }
    if (data === "z"){
      connection.write("Say: GO GO GO");
    }
    if (data === "x"){
      connection.write("Say: Gonna get ya");
    }
    if (data === "c"){
      connection.write("Say: Uh oh");
    }
  });
}

const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  handleUserInput();
  stdin.resume();
  return stdin;
};



module.exports = {setupInput};