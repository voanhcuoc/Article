var Schema = require('mongoose').Schema;

var Segment = Schema({
    _id : Schema.Types.ObjectId,
    name : String,
})

module.exports  = Segment;
