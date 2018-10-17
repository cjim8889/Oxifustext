const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/cool', function (req, res, next) {
    res.send('I am your father');
});

module.exports = router;
