const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.22.47.143",
    port: 50541
  });

  conn.on("connect", (data) => {
    console.log("Message from server:", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();