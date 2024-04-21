const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Sends a message and initial to server when connection is made
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JMM");
  });

  // Registers data received by the server and prints it
  conn.on("data", (data) => {
    console.log("Message from server:", data);

    conn.setEncoding("utf8");


  });
  return conn;
};

module.exports = { connect };