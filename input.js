let connection;

// Receives input from clients's keyboard
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// stores key's assigned commands and interacts with setupInput() to send the info to the server
const handleUserInput = function (data) {
  const keyIn = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right",
    o: "Say: Ups!",
    i: "Say: Oh YEAAAAAH!!!",
    p: "Say: That was a close one!"
  };

  if (data === "\u0003") {
    process.exit();
  } else {
    connection.write(keyIn[data]);
  }
};

module.exports = setupInput;