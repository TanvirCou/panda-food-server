const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    order: {
        type: Array,
        require: true,
    }
});

module.exports = orderSchema;