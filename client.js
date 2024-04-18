const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name:JMM");
  });

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;