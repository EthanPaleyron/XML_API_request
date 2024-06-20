// Function to fetch and display the XML data
const fetchAndDisplayUsers = () => {
  const url =
    "https://cors-anywhere.herokuapp.com/https://codetogo.io/api/users.xml";

  fetch(url)
    .then((response) => response.text())
    .then((xmlText) => {
      // Parse the XML
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "application/xml");

      // Convert XML to HTML
      const users = xmlDoc.getElementsByTagName("user");
      let htmlContent = "<ul>";

      console.log(users);
      for (let i = 0; i < users.length; i++) {
        const nameElement = users[i].getElementsByTagName("name")[0];
        const emailElement = users[i].getElementsByTagName("email")[0];

        const name = nameElement ? nameElement.textContent : "N/A";
        const email = emailElement ? emailElement.textContent : "N/A";

        htmlContent += `<li><strong>Name:</strong> ${name}, <strong>Email:</strong> ${email}</li>`;
      }

      htmlContent += "</ul>";

      // Display the HTML content
      document.getElementById("users").innerHTML = htmlContent;
    })
    .catch((error) => console.log("Error: " + error));
};

// Call the function to fetch and display users on page load
fetchAndDisplayUsers();
