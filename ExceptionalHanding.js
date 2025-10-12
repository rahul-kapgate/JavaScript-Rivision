let age = 18;

try {
    if(age >= 18){
        console.log("Adult")
    }else{
        throw new Error("Minor")
    }
} catch (error) {
    console.log(error)
} finally {
    console.log("Finally block")
}