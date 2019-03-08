const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

const furnitureSchema = new Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
    unique: [true, 'Product already exists.']},
  
    type: {
      type: String,
      required: REQUIRED_VALIDATION_MESSAGE
    },
    description: {
      type: String,
      required: REQUIRED_VALIDATION_MESSAGE
    },
    imageUrl: {
      type: String,
      required:REQUIRED_VALIDATION_MESSAGE
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