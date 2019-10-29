const express = require('express');
const cors = require('cors');
const router = require('./hubs/hubs-router.js');

const server = express();
server.use(express.json()); // using a piece of middleware
server.use(cors());

server.use('/api/posts', router);

server.get('/', (req, res) => {
  res.send(`
    HELLO THERE
  `);
});

module.exports = server;