const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Built in middleware
app.use(express.json());

// App routes
app.use('/districts', require('./controllers/districts'));
app.use('/castes', require('./controllers/castes'));
app.use('/flowers', require('./controllers/flowers'));
app.use('/religions', require('./controllers/religions'));
app.use('/exports', require('./controllers/exports'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
