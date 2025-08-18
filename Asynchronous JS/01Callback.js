function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});
