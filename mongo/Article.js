var Schema = require('mongoose').Schema;

var article = Schema({
    title : String,
    summary : String,
    link : String
})

module.exports  = article;
