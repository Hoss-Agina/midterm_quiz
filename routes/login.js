const express = require('express');
const router  = express.Router();
const { addUser } = require('../db/queries/addusers');

router.get('/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;
  addUser([req.params.id]);

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

module.exports = router;
