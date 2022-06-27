const express = require('express');
const router = express.Router();
const StoreModel = require('../models/Store');

router.get('/', (req, res) => {
    const products = StoreModel.products();
    res.send(products);
})

router.get('/:productId', (req, res) => {
    console.log('productId: ' + req.params.productId);
    const productId = req.params.productId;
    const product = StoreModel.product(productId);
    console.log('product: ' + product);
    res.send({product : product});
})

module.exports = router