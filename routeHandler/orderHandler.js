const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const orderSchema = require('../schemas/orderSchema');

const Order = new mongoose.model('Orders', orderSchema);

router.post('/orderdata', async(req, res) => {
    let orderData = req.body.orderData;
    console.log(req.body.orderData);
    orderData.splice(0, 0, {orderTime: req.body.orderTime});

    const emailId = await Order.findOne({'email': req.body.email});

    if(emailId === null) {
        try {
            const result = await Order.create({email: req.body.email, order: [orderData]});
            res.status(200).json({
                message: result,
            });
        } catch(err) {
            res.status(500).json({
                error: err,
            });
        }
    } else {
        try {
            const result = await Order.findOneAndUpdate({email: req.body.email}, { $push: {order: orderData}});
            res.status(200).json({
                message: result,
            });
        } catch(err) {
            res.status(500).json({
                error: err,
            });
        }
    }
});

router.post('/myOrderData', async(req, res) => {
    try {
        const result = await Order.findOne({'email': req.body.email});
        res.status(200).json({
        orderDetails: result,
        });
    } catch(err){
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;