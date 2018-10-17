//api.js api router


const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');



router.get('/articles/:uriId', articleController.getArticle);
router.post('/articles', articleController.newArticle);



module.exports = router;