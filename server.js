const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// routes
const books = require('./routes/api/books');
const register = require('./routes/api/register');

const app = express();
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err));

// use routes
app.use('/api/books', books);
app.use('/api/register', register);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
