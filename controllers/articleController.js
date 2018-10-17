const Article = require('../models/article');
const crypto = require('crypto');
const Hashids = require('hashids');
const fs = require('fs');
// URL: /articles/:uriId GET

module.exports.getArticle = function (req, res) {
    let uriId = req.params.uriId;

    Article.find({ uriId: uriId }, function (err, docs) {

        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        if(docs.length){
            let doc = docs[0];

            if(doc.expiredAt > Date.now()){
                res.setHeader('Access-Control-Allow-Origin','*');
                res.json(doc);

            }else{

                Article.find({ '_id' : doc['_id'] }).remove().exec();
                res.sendStatus(404);

            }
        }else{

            res.sendStatus(404);

        }

    })
};

// URL: /articles POST Create

module.exports.newArticle = function (req, res) {

    let expiredDuration = req.body.expiredDuration;
    let title = req.body.title;
    let htmlContent = req.body.htmlContent;
    let createdAt = Date.now();
    let hashIds = new Hashids('o2j4p214d12/123/4f12/!@#$@$%#$%^!@asd', 11);
    let uriId = hashIds.encodeHex(parseInt(crypto.randomBytes(3).toString('hex'), 16), parseInt(crypto.randomBytes(3).toString('hex'), 16), parseInt(crypto.randomBytes(3).toString('hex'), 16));

    let expiredAt = createdAt + (expiredDuration*60*1000);



    let article = {

        title: title,
        createdAt: createdAt,
        uriId: uriId,
        expiredAt: expiredAt,
        htmlContent: htmlContent

    };
    console.log(article);

    Article.create(article, function (err, results) {
        if(err){

            console.log(err);
            res.sendStatus(400);

        }else{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('X-Powered-By', 'Oxifus 0.0.1');
            res.status(201).send(JSON.stringify(article, null, 3));

        }
    });
};

