// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Create a new comment
app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('Comment is added to the database');
});

// Start web server
app.listen(3000, () => {
  console.log('Web server is listening on port 3000');
});

// Run the web server
// $ node comment.js

// Send a POST request to create a new comment
// $ curl -X POST http://localhost:3000/comments -d "title=Comment title&content=Comment content"
// Output: Comment is added to the database

// Check the console output
// Output: { title: 'Comment title', content: 'Comment content' }

// Parse the request body
// Parse the request body using the body-parser package
// Install the body-parser package
// $ npm install body-parser
// Import the body-parser package
// const bodyParser = require('body-parser');
// Use the body-parser package
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// Now, you can access the request body in the POST request handler

// Parse the request body as JSON
// Parse the request body as JSON using the body-parser package
// Send a POST request with a JSON body
// $ curl -X POST http://localhost:3000/comments -H "Content-Type: application/json" -d '{"title": "Comment title", "content": "Comment content"}'
// Output: Comment is added to the database
// Check the console output
// Output: { title: 'Comment title', content: 'Comment content' }
// The request body is automatically parsed as JSON

// Parse the request body as URL-encoded
// Parse the request body as URL-encoded using the body-parser package
// Send a POST request with a URL-encoded body
// $ curl -X POST http://localhost:3000/comments -d "title=Comment title&content=Comment content"
// Output: Comment is added to the database
// Check the console output
// Output: { title: 'Comment title', content: 'Comment content' }
// The request body is automatically parsed as URL-encoded

// Parse the request body as URL-encoded with extended option
// Parse the
