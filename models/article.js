const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const articleSchema = new Schema({

    title : {type: String, required: true},
    createdAt: {type: Number, required: true},
    htmlContent: {type:String, required: true},
    uriId: {type: String, required: true, unique: true},
    expiredAt: {type: Number, required: true}

});

module.exports = mongoose.model('Article', articleSchema);