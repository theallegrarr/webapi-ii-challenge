const express = require('express');
const Hubs = require('../data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
  Hubs.find()
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the posts',
      });
    });
});

router.get('/:id', (req, res) => {
  Hubs.findById(req.params.id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the post',
      });
    });
});

router.post('/', (req, res) => {
  Hubs.insert(req.body)
    .then(postid => {
      res.status(200).json(postid);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error inserting new post',
      });
    });
});

router.put('/:id', (req, res) => {
  Hubs.update(req.params.id, req.body)
    .then(postid => {
      res.status(200).json(postid);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error inserting new post',
      });
    });
});

router.delete('/:id', (req, res) => {
  Hubs.remove(req.params.id)
    .then(postid => {
      res.status(200).json(postid);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error deleting existing post',
      });
    });
});

router.get('/comments/:id', (req, res) => {
  Hubs.findPostComments(req.params.id)
    .then(postid => {
      res.status(200).json(postid);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Unable to fetch post comments',
      });
    });
});

router.get('/comment/:id', (req, res) => {
  Hubs.findCommentById(req.params.id)
    .then(postid => {
      res.status(200).json(postid);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Unable to fetch post comment by ID',
      });
    });
});

router.post('/comment', (req, res) => {
  Hubs.insertComment(req.body)
    .then(postid => {
      res.status(200).json(postid);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Unable to add new post comment',
      });
    });
});


module.exports = router;