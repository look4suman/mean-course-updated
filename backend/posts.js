const express = require('express');
const Post = require('./model/post');

const router = express.Router();

router.get('/',
  function(req, res){
    Post.find().then(documents => {
      res.status(200).json({
        message: 'Data fetched successfully',
        posts: documents
      });
    });
  }
);

router.post('/',
function(req, res){
  const post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    post.save();
    console.log(post);
    res.status(201).json({
      message: 'Data saved successfully'
    });
  }
);

router.delete('/:id',
function(req, res){
    Post.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Data deleted successfully'
      });
    });
  }
);

module.exports = router;
