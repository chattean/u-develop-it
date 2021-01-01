// Open the server.js file and import express at the top of the file
const express = require('express');
// the PORT designation and the app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });

// the function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });