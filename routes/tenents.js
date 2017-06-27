const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');

//include bcrypt in authentication
router.get('/', (req, res, next) => {
  knex('tenents')
  .then(tenents => {
    res.json(tenents)
  })
});

router.get('/:id', (req, res, next) => {
  knex('tenents')
    .where('id', req.params.id)
    .then(tenent => res.json(tenent))
    .catch(err => next(err));
});


router.delete('/:id', (req, res, next) => {
  knex('tenents')
    .del()
    .where({id: req.params.id})
    .then(() => {
      return knex('tenents')
        .del()
        .where({id: req.params.id})
    })
    .then(() => res.end())
    .catch(err => next(err));
});


module.exports = router;
