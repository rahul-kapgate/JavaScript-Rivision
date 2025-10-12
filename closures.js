function outer() {
    let count = 0; // variable inside outer
  
    function inner() {
      count++; // inner function uses outer variable
      console.log(count);
    }
  
    return inner;
  }
  
  const counter = outer(); // outer() returns inner()
  
  counter(); // 1
  counter(); // 2
  counter(); // 3
  