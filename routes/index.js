const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function (req, res, next) {

    res.sendFile(path.join(__dirname, '../public/html/index.html'));


});



router.get('/:uriId', function (req, res, next) {

    res.sendFile(path.join(__dirname, '../public/html/content.html'));

});




module.exports = router;
