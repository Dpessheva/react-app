const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/products', feedController.getProducts);
router.post('/products/create', feedController.createProduct);

module.exports = router;