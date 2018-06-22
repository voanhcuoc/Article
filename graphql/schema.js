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
        updateSegment(segment : SegmentModel ) : Segment
        createUser(user:UserModel) : User
        updateUser(user: UserModel) : User
        createArticle(article : ArticleModel) : Article
        updateArticle(article : ArticleModel) : Article
        likeArticle(articleId : ID) : Message
        unlikeArticle(articleId : ID) : Message
    }

    input SegmentModel{
        name : String
    }

    input ArticleModel{
        title : String
        summary : String
        link : String
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
