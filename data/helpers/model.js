const db = require("../dbConfig.js");

module.exports = {
  get,
  insert,
};

function get() {
    return db("form")
  }

function insert(submission) {
  return db("form")
    .insert(submission)
}