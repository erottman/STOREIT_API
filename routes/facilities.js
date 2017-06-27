const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');

//include bcrypt in authentication
router.get('/', (req, res, next) => {
  knex('facilities')
  .then(facilities => {
    res.json(facilities)
  })
});


module.exports = router;
