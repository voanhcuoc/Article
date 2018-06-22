var Schema = require('mongoose').Schema;

var Rank = Schema({
    article_id : {tyep : Schema.Types.ObjectId, ref : 'Article'},
    segment_id : {type : Schema.Types.ObjectId, ref: 'Segment'},
    point : Numer
})

module.exports  = Segment;
