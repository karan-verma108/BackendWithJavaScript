require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

// let's create our first GET request

app.get('/', (req, res) => {
  res.send('Hello all, this is my first GET request, yaay!');
});

app.get('/user', (req, res) => {
  res.send('Total users are none at the moment');
});

app.get('/register', (req, res) => {
  res.send('<h1>Welcome to the register page, please sign up here. </h1>');
});

//let's listen to the server

app.listen(port, () => {
  console.log('Server is listening at port', port);
});
