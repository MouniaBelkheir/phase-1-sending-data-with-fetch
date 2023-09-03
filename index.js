function submitData(name, email) {
    // Step 1: Create an object with the name and email fields.
    const formData = {
      name: name,
      email: email,
    };
  
    // Step 2: Define the configuration for the POST request.
    const configurationObject = {
      method: "POST", // Set the HTTP method to "POST".
      headers: {
        "Content-Type": "application/json", // Specify JSON content type.
        Accept: "application/json", // Specify JSON response type.
      },
      body: JSON.stringify(formData), // Convert formData to a JSON string.
    };
  
    // Step 3: Return the fetch promise for further chaining.
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        // Step 4: Parse the JSON response.
        return response.json();
      })
      .then(function (data) {
        // Step 5: Append the new ID to the DOM.
        document.body.innerHTML = data.id;
      })
      .catch(function (error) {
        // Step 6: Handle errors by appending the error message to the DOM.
        document.body.innerHTML = error.message;
      });
  }
  