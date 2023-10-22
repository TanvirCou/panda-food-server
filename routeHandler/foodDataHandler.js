const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/items', async(req, res) => {
    try{
        const db = mongoose.connection.db.collection('foodItems');
        const result = await db.find({}).toArray();
        res.send(result);
    } catch(err) {
        res.send(err);
    }
});

router.get('/category', async(req, res) => {
    try{
        const db = mongoose.connection.db.collection('foodCategory');
        const result = await db.find({}).toArray();
        res.send(result);
    } catch(err) {
        res.send(err);
    }
});


module.exports = router;