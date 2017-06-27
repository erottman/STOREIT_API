const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');

//include bcrypt in authentication
router.get('/', (req, res, next) => {
  knex('boxes')
  .then(boxes => {
    res.json(boxes)
  })
});

router.get('/:id', (req, res, next) => {
  knex('boxes')
    .where('id', req.params.id)
    .then(box => res.json(box))
    .catch(err => next(err));
});


router.delete('/:id', (req, res, next) => {
  knex('boxes')
    .del()
    .where({id: req.params.id})
    .then(() => {
      return knex('boxes')
        .del()
        .where({id: req.params.id})
    })
    .then(() => res.end())
    .catch(err => next(err));
});


module.exports = router;
