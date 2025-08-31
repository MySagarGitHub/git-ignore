const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});

// Another route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Here is your data!', data: [1, 2, 3, 4, 5] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port:3000}`);
});

