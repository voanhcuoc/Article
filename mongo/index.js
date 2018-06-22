const ArticalSchema = require('./Article');
const LikeSchema = require('./Like');
const RankSchema = require('./Rank');
const UserSchema = require('./User');
const SegmentSchema = require('./Segmnet');

const Model = require('mongoose').model;

var Article = Model('Article',ArticalSchema);
var Like = Model('Like',LikeSchema);
var Rank = Model('Rank',RankSchema);
var User = Model('User',UserSchema);
var Segment = Model('Segment',SegmentSchema);

module.exports = {
    Article,
    Like,
    Rank,
    User,
    Segment
}



