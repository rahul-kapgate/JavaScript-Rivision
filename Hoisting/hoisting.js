console.log(a)    // undefined
// console.log(b)  ReferenceError: Cannot access 'b' before initialization
// console.log(c) ReferenceError: Cannot access 'c' before initialization


var a = "a"
let b = "b"
const c = "c"


greet()   // Hello

function greet() {
    console.log("Hello")
    // console.log(d)  // ReferenceError: Cannot access 'd' before initialization
}


let d = "d"


// sayHello()  ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = () => {
    console.log("Hello")
}






