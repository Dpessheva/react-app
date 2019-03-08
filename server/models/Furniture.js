const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

const furnitureSchema = new Schema({
   type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.String
  }],

  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Fruniture', furnitureSchema);