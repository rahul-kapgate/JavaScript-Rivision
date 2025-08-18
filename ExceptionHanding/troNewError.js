
const a = 10
const b = 10

try {

    if (a == b) {
      throw new Error("error op");
    }
    
} catch (error) {
    console.log(error.message)
}


