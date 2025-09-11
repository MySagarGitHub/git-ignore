const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});






