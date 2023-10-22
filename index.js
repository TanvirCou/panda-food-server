const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const userHandler = require('./routeHandler/userHandler');
const foodDataHandler = require('./routeHandler/foodDataHandler');
const orderHandler = require('./routeHandler/orderHandler');

const app = express()
app.use(express.json());
app.use(cors());

const port = 5000;

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('Successful'))
    .catch((err) => console.log(err.message));

app.use('/user', userHandler);
app.use('/food', foodDataHandler);
app.use('/order', orderHandler);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || port);