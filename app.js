const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
