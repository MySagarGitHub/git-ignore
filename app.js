const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' }
];

// Get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Get item by id
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// Create new item
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});
// Update item
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    item.name = req.body.name;
    res.json(item);
});

// Delete item
app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Item not found');
    const deleted = items.splice(index, 1);
    res.json(deleted[0]);
});









