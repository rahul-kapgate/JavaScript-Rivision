// fetch("https://jsonplaceholder.typicode.com/posts/10")
// .then(response => {
//     if(!response.ok) throw new Error("Network Error")
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.log(error))


async function getPost(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10");
        if(!response.ok) throw new Error("Network Error")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)      
    }
}

getPost()