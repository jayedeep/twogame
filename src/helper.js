var colors = [
  "white",
  "black",
  "blue",
  "green",
  "yellow",
  "red",
  "orange",
 
];

function choice() {
  var rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

export { choice };
