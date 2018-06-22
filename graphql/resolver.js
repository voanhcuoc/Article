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
    	createSegment(args) => Segment.create({name:  args.segment.name}).exec();
    	updateSegment(args) => Segment.where({name: args.input.old_name}).update({name: args.input.new_name});
    	createUser(args) => User.create({user: args.user}).exec();
    	updateUser(args) => User.findbyId(args.user.old_userId).update(args.user.new_user);
    	createArticle(args) => Article.create(args.article).exec();
    	updateArticle(args) => Article.findbyId(args.article.old_articleId).update(args.article.new_article);
    	likeArticle(args) => Like.create(/* FIXME */);
    	unlikeArticle(args) => Like.remove(/* FIXME */);

    }
}
