function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // executing the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Rahul", sayBye);
