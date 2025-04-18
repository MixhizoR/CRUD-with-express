// server.js

// 1. Import Express (using require, since we installed it with npm)
const express = require('express');

// 2. Create an instance of the Express application
// Think of 'app' as our main object to configure the server
const app = express();

// 3. Define a Port number for the server to listen on
// Ports are like doors on your computer for network traffic.
// 3000 is common for development, but could be anything not already in use.
// Use uppercase for constants by convention.
const PORT = 3000;

// 4. Define a Route Handler for the root URL ('/')
// This tells Express: "When someone makes a GET request to the main page ('/')..."
// "...run this function."
// The function receives two important objects:
// req (request): Information about the incoming request (from the browser/client).
// res (response): Tools to send a response back to the browser/client.
app.get('/', (req, res) => {
  // Use the response object (res) to send back the text "Hello World!"
  res.send('Hello World!');
});

// 5. Start the Server and make it listen on the defined PORT
// This actually turns the server 'on'.
// The second argument is a callback function that runs *once* the server
// has successfully started. It's common to log a message here.
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server.');
});