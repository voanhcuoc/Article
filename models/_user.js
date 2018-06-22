var Schema = require('mongoose').Schema;

var User = Schema({
    name : String,
    email : String,
    segment : {type : Schema.Types.ObjectId, ref : 'Segment'}
})

module.exports  = User;
