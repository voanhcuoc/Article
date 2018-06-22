const ArticalSchema = require('./Article');
const LikeSchema = require('./Like');
const RankSchema = require('./Rank');
const UserSchema = require('./User');
const SegmentSchema = require('./Segmnet');

const model = require('mongoose').model;

var Article = model('Article',ArticalSchema);
var Like = model('Like',LikeSchema);
var Rank = model('Rank',RankSchema);
var User = model('User',UserSchema);
var Segment = model('Segment',SegmentSchema);

module.exports = {
    Article,
    Like,
    Rank,
    User,
    Segment
};
