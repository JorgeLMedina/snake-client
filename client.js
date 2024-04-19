const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  const handleUserInput = function (data) {
    if (data === "\u0003") {
      process.exit();
    }
  };

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput(data));
    return stdin;
  };

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JMM");
    /* setTimeout(() => {
      conn.write("Move: down"), 500
    });*/
  });

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;