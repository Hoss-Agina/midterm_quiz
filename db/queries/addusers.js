const db = require('../connection');

const addUser = (userId) => {
  return db.query('INSERT INTO users1 (loginname) VALUES ($1);', userId)
    .then(data => {
      return data.rows;
    });
};

module.exports = { addUser };
