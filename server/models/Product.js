const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

const productSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: [true, 'Product already exists.']
  },
  description: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  imageUrls: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  quantity: {
    type: Number,
    min: 0,
    max: 1000
  },
  price: {
    type: Number,
    required: REQUIRED_VALIDATION_MESSAGE,
    min: 1,
    max: 500000
  },
  likes: [{
    type: mongoose.Schema.Types.String
  }],
  reviews: [],

});


let Product = mongoose.model('product', productSchema);
module.exports=Product;
module.exports.seedProduct = () => {
  Product.find({}).then(products => {
    if (products.length > 0) return

    const productsSeed = [
      {
       // key:_id,
        name: 'Jelly Beans',
        description: 'It’s hard to smile when you’re puckering. Somehow these sour gourmet jelly beans make you want to do both. They come in an assortment of sour fruit flavors that’ll make your face scrunch up. But they’re also made with real fruit juice that provides a boost of Vitamin C for your immune system, and that should make you smile -- even if you’re still puckering',
        price: 9.90,
        imageUrls: 'https://cdn.shopify.com/s/files/1/0053/4692/products/Jelly_Beans_Pectin2_large.jpg?v=1425094699',
        likes: [],
        reviews: []
      },
      {
        //key:_id,
        name: 'Sour Jelly Beans Assortment',
        description: 'It’s hard to smile when you’re puckering. Somehow these sour gourmet jelly beans make you want to do both. They come in an assortment of sour fruit flavors that’ll make your face scrunch up. But they’re also made with real fruit juice that provides a boost of Vitamin C for your immune system, and that should make you smile -- even if you’re still puckering.',
        price: 7.90,
        imageUrls: 'https://www.candywarehouse.com/assets/item/regular/sour-jelly-beans-assortment-125420-ff.jpg',
        likes: [],
        reviews: []
      },
      {
        //key:_id,
        name: 'Jelly Belly Color Combo - Pink and Purple Blend',
        description: 'There are approximately 400 pieces per pound. Box contains 4 pounds of Pink and Purple Blend Jelly Belly Color Combo Jelly Beans packed in two bags, each with a net weight of 2 pounds.',
        price: 8.90,
        imageUrls: 'https://www.candywarehouse.com/assets/item/regular/jelly-belly-bubblegum-island-punch-129645-ff.jpg',
        likes: [],
        reviews: []
      },
      {
        //key:_id,
        name: 'CalJelly Belly Color Combo - Purple and Green Blendzone',
        description: 'Match the logo colors of your corporation, sports team, or school to add a nice design flair to the festivities while the stunning flavor combo of Island Punch and Green Apple delivers sweet satisfaction!',
        price: 11.90,
        imageUrls: 'https://www.candywarehouse.com/assets/item/regular/jelly-belly-island-punch-green-apple-129646-ff.jpg',
        likes: [],
        reviews: []
      },
      {
        //key:_id,
        name: 'Jelly Belly 20 Flavors Jelly Beans Sampler: 8.5-Ounce Gift Box',
        description: 'Pollo might be your choice when you are in the mood for something healthy. Tender grilled chicken, creamy feta, roasted red peppers and corn are generously piled on top of our famous tomato sauce.',
        price: 10.90,
        imageUrls: 'https://www.candywarehouse.com/assets/item/regular/jelly-Belly-20-Flavors-128071-box.jpg',
        likes: [],
        reviews: []
      },
      {
        //key:_id,
        name: 'Brach Fiesta Malted Milk Chocolate Easter Eggs',
        description: 'Classic malted milk Easter eggs in bright white or pastel colors. Crispy malt balls are surrounded by a layer of rich milk chocolate and then covered in a candy shell. Finally, the candy shell is speckled with color to make them look like real bird eggs!',
        price: 5.90,
        imageUrls: 'https://www.candywarehouse.com/assets/item/regular/brachs-easter-fiesta-malted-milk-choc-eggs-im-12525112.jpg',
        likes: [],
        reviews: []
      },
     
    ]

    Product
      .create(productsSeed)
      .then(() => console.log('Seeded candies successfully.'))
      .catch((error) => console.log(error))
  })
}