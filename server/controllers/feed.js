const Furniture = require('../models/Furniture');

module.exports = {
  getProducts: (req, res) => {
    Furniture.find()
      .then((products) => {
        res
          .status(200)
          .json({ message: 'Fetched products successfully.', products });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
  createProduct: (req, res) => {
    const productsObj = req.body;
    Furniture.create(productsObj)
    .then((product) => {
      res.status(200)
        .json({
          message: 'Product created successfully!',
          product
        })
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
  }
}