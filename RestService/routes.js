const { authController } = require('./controllers/authController');
const { bookController } = require('./controllers/bookController');

const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'Rest Service Operational' })
});

router.use('/auth', authController)
router.use('/book', bookController)

module.exports = router