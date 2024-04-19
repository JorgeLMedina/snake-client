// finishes game when ctrl + c is hit
const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  }
};
// Receives input from clients's keyboard
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;