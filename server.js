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
  db.insert2(req.body)
  .then(response => res.status(200).json(response))
  .catch(err => console.log(err))
});

module.exports = server;