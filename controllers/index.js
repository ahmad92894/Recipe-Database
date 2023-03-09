const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const userRoutes = require('../controllers/api/userRoutes');

router.use('/', homeRoutes);
router.use('/user', userRoutes);

router.use('/api', apiRoutes);

module.exports = router;