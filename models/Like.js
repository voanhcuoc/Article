var Schema = require('mongoose').Schema;

var Like = Schema({
    user_id : {type : Schema.Types.ObjectId,ref : 'User'},
    article_id : {type: Schema.Types.ObjectId, ref : 'Article'}
})

module.exports  = Like;

