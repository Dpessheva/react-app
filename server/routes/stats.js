const express = require('express')
const Furniture = require('../models/Furniture')
const User = require('../models/User')

const router = new express.Router()

router.get('/', (req, res) => {
  User
    .count({})
    .then(users => {
      Furniture
        .count({})
        .then(products => {
          res.status(200).json({
            products,
            users
          })
        })
    })
})

module.exports = router
