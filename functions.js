//normal function 
function greet(name){
    console.log(`Hello ${name}`)
}

greet("Deva")

//arrow function
const greet2 = (name) => {
    console.log(`Hello ${name}`)
}
greet2("Deva")

//function expression
const greet3 = function(name){
    console.log(`Hello ${name}`)
}
greet3("Deva")

//function declaration
function greet4(name){
    console.log(`Hello ${name}`)
}

//Anonymous function    
setTimeout(function(){
    console.log("Hello")
}, 1000)

//IIFE function
;(function(){
    console.log("Hello")
})()