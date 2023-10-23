const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();
const foodDataHandler = require('./routeHandler/foodDataHandler');
const orderHandler = require('./routeHandler/orderHandler');

const app = express()
app.use(express.json());
app.use(cors());

const port = 5000;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xdwfjii.mongodb.net/pandaFood?retryWrites=true&w=majority`)
    .then(() => console.log('Successful'))
    .catch((err) => console.log(err.message));

app.use('/food', foodDataHandler);
app.use('/order', orderHandler);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || port);