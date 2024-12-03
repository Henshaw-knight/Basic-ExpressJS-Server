const express = require('express');
const port = 3000;

const app = express();


// Homepage route
app.get('/', (req, res) => {
    res.send('Welcome to express');
});

// About route
app.get('/about', (req, res) => {
    res.send('About Us - We are a great Tech company with 10+ years experience');
});

// Working with parameters
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

// Creating JSON API
let users = [
    {id: 1, name: 'User 1'},
    {id: 2, title: 'User 2'}
]

app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

// For Non-existent Routes
app.all('*', (req, res) => {
    res.status(404).json({message: '404 - Page Not Found'})
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});