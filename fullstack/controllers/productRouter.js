const express = require('express');
let productRouter = express.Router();


productRouter.route('/details')
    .get((req, res) => {
        res.send("product details")
    })
productRouter.route('/')
    .get((req, res) => {
        res.send(" product default")
    })

module.exports = productRouter;