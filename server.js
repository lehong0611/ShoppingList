const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const itemsRouter = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB config
const url = 'mongodb://ds117111.mlab.com:17111/shopping_list';

//Connect to Mongo
mongoose.connect(url, {
	useNewUrlParser: true,
	auth: {
    user: 'admin',
    password: 'hong97'
  }
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Use Router
app.use('/api/items', itemsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));