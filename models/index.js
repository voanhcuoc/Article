const ArticleSchema = require('./_article');
const LikeSchema = require('./_like');
const RankSchema = require('./_rank');
const UserSchema = require('./_user');
const SegmentSchema = require('./_segment');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/article-ranking');

var Article = mongoose.model('Article',ArticleSchema);
var Like = mongoose.model('Like',LikeSchema);
var Rank = mongoose.model('Rank',RankSchema);
var User = mongoose.model('User',UserSchema);
var Segment = mongoose.model('Segment',SegmentSchema);

module.exports = {
    Article,
    Like,
    Rank,
    User,
    Segment
};
