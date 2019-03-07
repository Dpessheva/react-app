const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is.auth');

router.post('/furniture/create', feedController.createFurniture);
router.get('/furnitutes', feedController.getFurnitures);

module.exports = router;