const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

// ----------- STATIC FOLDER AND STATIC FILES SETUP

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// although the code below is commented, the '/'  route is still being handled by express.static, opening the index.html
// app.get('/', (req, res) =>
// {
//     // res.sendFile(path.join(__dirname, 'public', 'index.html')); // alternative way to serve index.html
//     res.sendFile('index.html'); // using app.use(express.static(...));
// });

// the code below is commented, but  it still handles the route because about.html exists  in the public folder, to access it it will need the .html (/about.html)
// app.get('/about', (req, res) =>
// {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

let posts = [
    { id: 1, title: 'post 1' },
    { id: 2, title: 'post 2' },
    { id: 3, title: 'post 3' }
];

// get all posts
app.get('/api/posts', (req, res) =>
{
    res.json(posts);
});

// get single post
app.get('/api/posts/:id', (req, res) =>
{
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));