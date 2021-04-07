const express = require('express');
const app = express();

app.use(express.json());

//this route will be used for all routes in cats.js, and we are
//importing cats by the require statement as the second parameter
app.use('/api/v1/cats', require('./controllers/cats'));
app.use('/api/v1/dogs', require('./controllers/dogs'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
