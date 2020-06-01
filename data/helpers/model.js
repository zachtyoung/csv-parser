const db = require("../dbConfig.js");

module.exports = {
  get,
  insert,
  insert2,
  insert3,
  insert4,
  insert5,
  insert6
};

function get() {
    return db("SDN")
  }

function insert(submission) {
  return db("form")
    .insert(submission)
}
function insert2(submission) {
  return db("SDN")
    .insert(submission)
}
function insert3(submission) {
  return db("test_individual")
    .insert(submission)
}
function insert4(submission) {
  return db("test_aircraft")
    .insert(submission)
}
function insert5(submission) {
  return db("test_vessel")
    .insert(submission)
}
function insert6(submission) {
  return db("test_unknown")
    .insert(submission)
}