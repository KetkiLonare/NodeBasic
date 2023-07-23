const express = require('express');
let categoryRouter = express.Router();


categoryRouter.route('/details')
    .get((req, res) => {
        res.send(" category details")
    })
categoryRouter.route('/')
    .get((req, res) => {
        res.send("category default")
    })

module.exports = categoryRouter;