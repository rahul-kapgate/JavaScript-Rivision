import axios from "axios"

// axios
//   .get("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     console.log("data" ,response.data); // Data from server
//     console.log("data", response.status); // HTTP status code
//     console.log("data", response.headers); // Response headers
//   })
//   .catch((error) => console.error(error));


async function getPost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
getPost();
