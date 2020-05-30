const express = require('express');
const server = express();
const cors = require('cors')
server.use(cors())
server.use(express.json());
const db = require('./data/helpers/model');
server.get('/', (req, res) => {
  db.get()
  .then(response => res.status(200).json(response))
});

server.post('/user_submission', (req, res) => {
  db.insert(req.body)
  .then(response => res.status(200).json(response))
});

module.exports = server;