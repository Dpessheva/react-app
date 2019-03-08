const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

const furnitureSchema = new Schema({

  type: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE,
    unique: [true, 'Product already exists.']
  },
  description: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  imageUrl: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Furniture', furnitureSchema);