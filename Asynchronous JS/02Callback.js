// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("✅ Operation Successful!");
//   } else {
//     reject("❌ Operation Failed!");
//   }
// });

// console.log(promise);



function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ user: "Rahul", age: 25 });
      } else {
        reject("Failed to fetch data!");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error(error);
  });
