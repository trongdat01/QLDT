require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', routes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});