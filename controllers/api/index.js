const router = require('express').Router();
const User = require('./user-routes');
const Questions = require('./question-routes');


router.use('/user', User);
router.use('/questions',Questions)


module.exports = router;