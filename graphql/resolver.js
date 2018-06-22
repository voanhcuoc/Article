const {
    Article,
    User,
    Like,
    Rank,
    Segment
} = require('../mongo');


module.exports = {
    Query : {
    	Segment(args) => Segment.findbyId(args._id).exec();
    	Segments() => Segment.find().exec();
    	User( args) => User.findbyId(args._id).exec();
    	User() => User.find().exec();
    	Article( args) => Article.find({title : args.title }).exec();
    	Articles(args) => Article.find().limit(args.limit).exec();
    	Rank(args) => Rank.find({article_id : args.articleId, segment_id: args.segmentId}); // FIXME
    }
    Mutation : {
    	createSegment(args) => Segment.create( args.segment.name).exec();
    	updateSegment(args) => Segment.where(args.input.old_name).update(args.input.new_name);
    	createUser(args) => User.create(args.user).exec();
    	updateUser(args) => User.findbyId(args.input.old_userId).update(args.input.new_user);
    	createArticle(args) => Article.create(args.article).exec();
    	updateArticle(args) => Article.findbyId(args.input.old_articleId).update(args.input.new_article);
    	likeArticle(args) => Like.create(/* FIXME */);
    	unlikeArticle(args) => Like.remove(/* FIXME */);

    }
}
