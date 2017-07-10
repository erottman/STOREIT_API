const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');

//include bcrypt in authentication
router.get('/', (req, res, next) => {
  knex('units')
  .then(units => {
    res.json(units)
  })
});

router.get('/:id', (req, res, next) => {
  knex('units')
    .where('id', req.params.id)
    .then(unit => res.json(unit))
    .catch(err => next(err));
});




router.delete('/:id', (req, res, next) => {
  knex('units')
    .del()
    .where({id: req.params.id})
    .then(() => {
      return knex('units')
        .del()
        .where({id: req.params.id})
    })
    .then(() => res.end())
    .catch(err => next(err));
});


module.exports = router;
