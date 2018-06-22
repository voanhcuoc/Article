const express = require('express');
const { buildSchema } = require('graphql');
const graphqlMiddleware = require('express-graphql');

const segmentSchema = buildSchema(`
    type Query{
        Segment(_id : ID) : Segment
        Segments : [Segment]
        User(_id : ID) : User
        Users : [User]
        Article(title : String) : Article
        Articles(limit : Int) : [Article]
        Rank(articleId : ID, segmentId : ID) : Rank
    }
    type Mutation {
        createSegment(segment : SegmentModel ) : Segment
        updateSegment(input : SegmentUpdate ) : Segment
        createUser(user:UserModel) : User
        updateUser(user: UserUpdate) : User
        createArticle(article : ArticleModel) : Article
        updateArticle(article : ArticleUpdate) : Article
        likeArticle(articleId : ID) : Message
        unlikeArticle(articleId : ID) : Message
    }

    input SegmentUpdate{
        old_name : String
        new_name : String
    }

    input SegmentModel{
        name : String
    }
    input ArticleUpdate {
        old_articleId : ID
        new_article : ArticleModel
    }

    input ArticleModel{
        title : String
        summary : String
        link : String
    }
    input UserUpdate{
        old_userId : ID
        new_user : UserModel
    }

    input UserModel {
        name : String
        email : String
        segment : ID
    }

    type Article {
        _id : ID
        title : String
        summary : String
        link : String
    }

    type Segment{
        _id : ID
        name : String
    }

    type User{
        _id : ID
        name : String
        email : String
        segment : Segment
    }

    type Message {
        code : String
        message : String
    }

    type Rank {
        article_id : ID
        segment_id : ID
        point : Int
    }
`)
