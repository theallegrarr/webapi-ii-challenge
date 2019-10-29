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
        message: 'Error retrieving the hubs',
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
        message: 'Error retrieving the hubs',
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




module.exports = router;