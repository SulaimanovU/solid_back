const express = require('express');
const { body } = require('express-validator');
const user = require('../controllers/user');
const router = express.Router();


router.get('/test', user.test);

router.post(
    '/user',
    [
        body('name').trim().not().isEmpty(),
        body('number').trim().not().isEmpty()
    ],
    user.createUser
);


module.exports = router;












