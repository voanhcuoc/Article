var Schema = require('mongoose').Schema;

var article = Schema({
    _id : Schema.Types.ObjectId,
    title : String,
    summary : String,
    link : String
})

module.exports  = article;
