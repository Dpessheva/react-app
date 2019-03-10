const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

  type: {
    type: String,
    required: true,
    unique: [true, 'Product already exists.']
  },
  description: {
    type: String,
    required: true
  },
  imageUrls: {
    type: String,
  },
  quantity: {
     type: Number,
      required: true,
       min: 0,
        max: 1000
 },

  price: {
    type: Number,
    required: true,
    min: 1,
     max: 500000
  },
 
});

module.exports = mongoose.model('product', productSchema);