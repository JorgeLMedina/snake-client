const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();