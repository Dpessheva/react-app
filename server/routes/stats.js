const express = require('express')
const Product = require('../models/Product')
const User = require('../models/User')

const router = new express.Router()

router.get('/stats', (req, res) => {
  User
    .count({})
    .then(users => {
      Product
        .count({})
        .then(products => {
          res.status(200).json({
            products,
            users
          })
        })
    }).catch(console.log(err));
})

module.exports = router