// Function to fetch data from an API
function fetchData() {
    // Fetch data from a hypothetical API and return a promise
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Parse the response as JSON and return another promise
        return response.json();
      })
      .then(data => {
        // Log the data
        console.log(data);
      })
      .catch(error => {
        // Handle errors, such as network issues or invalid JSON
        console.error('Error fetching data:', error.message);
      });
  }
  
  // Call the function
  fetchData();
  