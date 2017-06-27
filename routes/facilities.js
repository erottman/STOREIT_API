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

router.get('/:id', (req, res, next) => {
  knex('facilities')
    .where('id', req.params.id)
    .then(facility => res.json(facility))
    .catch(err => next(err));
});


router.delete('/:id', (req, res, next) => {
  knex('facilities')
    .del()
    .where({id: req.params.id})
    .then(() => {
      return knex('facilities')
        .del()
        .where({id: req.params.id})
    })
    .then(() => res.end())
    .catch(err => next(err));
});


module.exports = router;
