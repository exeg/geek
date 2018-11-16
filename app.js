const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const errorHandlers = require('./handlers/errorHandlers');


mongoose.connect('mongodb://localhost:27017/geektest', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

require('./models/Category');
require('./models/Article');
require('./models/Recipe');


const app = express();


// After allllll that above middleware, we finally handle our own routes!
const routes = require('./routes/index');
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

app.set('port', (process.env.PORT || 3000));
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});