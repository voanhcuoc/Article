var Schema = require('mongoose').Schema;

var User = Schema({
    _id : Schema.Types.ObjectId,
    name : String,
    email : String,
    segment : {type : Schema.Types.ObjectId, ref : 'Segment'}
})

module.exports  = User;
