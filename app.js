const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, JS, and images)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
