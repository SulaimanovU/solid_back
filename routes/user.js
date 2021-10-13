const express = require('express');
const { body } = require('express-validator');
const user = require('../controllers/user');
const router = express.Router();


router.get('/test', user.test);

router.post(
    '/user',
    [
        body('name').trim().not().isEmpty(),
        body('number').trim().not().isEmpty(),
        body('from').trim().not().isEmpty()
    ],
    user.createUser
);


router.get('/data', user.getData);

module.exports = router;













