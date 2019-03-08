const Furniture = require('../models/Furniture');

module.exports = {
  getFurnitures: (req, res,next) => {
    Furniture.find()
      .then((furnitures) => {
        res
          .status(200)
          .json({ message: 'Fetched furnitures successfully.', furnitures });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
  createFurniture: (req, res,next) => {
    const mebelsObj = req.body;
    Furniture.create(mebelsObj)
    .then((furniture) => {
      res.status(200)
        .json({
          message: 'Furniture created successfully!',
          furniture
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