$(document).ready(function() {
  var choice = prompt("To learn about Turtles, type 'T', to learn about Snakes, type 'S', to learn about Bugs, type 'B'.");
  choice = choice.toLowerCase();

  if (choice === "t") {
    $(".turtles").show();
  } else if (choice === "b") {
    $(".bugs").show();
  } else if (choice === "s") {
    $(".snakes").show();
  } else {
    alert("Please just type a 'T', 'S' or 'B'...fool!");
  }

});
