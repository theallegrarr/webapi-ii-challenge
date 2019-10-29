const express = require('express');
const cors = require('cors');
const Hubs = require('./hubs-model.js');

const server = express();
server.use(express.json()); // using a piece of middleware

