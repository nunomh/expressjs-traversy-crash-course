import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import { fileURLToPath } from 'url'; // ES6

const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware (to receive JSON data)
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to parse URL encoded data

// Logger middleware
app.use(logger);  // this will call the logger function to all incoming requests



// ----------- STATIC FOLDER AND STATIC FILES SETUP

// setup static folder
const __filename = fileURLToPath(import.meta.url); // ES6
const __dirname = path.dirname(__filename); // ES6
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


// -------- ROUTES
app.use('/api/posts', posts); // correct way to use the routes module (instead of app.get(...), it's using router.ger(...). don't forget to add 'module.exports = router' at the end of the router)


app.listen(port, () => console.log(`Server is running on port ${port}`));