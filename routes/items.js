const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');

//include bcrypt in authentication
router.get('/', (req, res, next) => {
  knex('items')
  .then(items => {
    res.json(items)
  })
});

router.get('/:id', (req, res, next) => {
  knex('items')
    .where('id', req.params.id)
    .then(item => res.json(item))
    .catch(err => next(err));
});


router.delete('/:id', (req, res, next) => {
  knex('items')
    .del()
    .where({id: req.params.id})
    .then(() => {
      return knex('items')
        .del()
        .where({id: req.params.id})
    })
    .then(() => res.end())
    .catch(err => next(err));
});


module.exports = router;
