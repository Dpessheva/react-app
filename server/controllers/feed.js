const Furniture = require('../models/Furniture');

module.exports = {
  getFurnitures: (req, res) => {
    Furniture.find()
      .then((mebels) => {
        res
          .status(200)
          .json({ message: 'Fetched furnitures successfully.', mebels });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
  createFurniture: (req, res) => {
    const mebelsObj = req.body;
    Movie.create(mebelsObj)
    .then((mebel) => {
      res.status(200)
        .json({
          message: 'Furniture created successfully!',
          mebel
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