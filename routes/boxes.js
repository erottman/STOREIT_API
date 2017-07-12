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
    .then(box => res.json(box[0]))
    .catch(err => next(err));
});

router.put('/:id', (req, res, next) => {
  console.log('body', req.body);
  knex('boxes')
    .update(req.body)
    .where({id: req.params.id})
    .returning('*')
    .then(boxes => res.json(boxes[0]))
    .catch(err => next(err));
});


router.post('/', (req, res, next) => {
  console.log("im here");
  let new_box = {
    unit_id: req.body.unit_id,
    identifier: req.body.identifier,
    unit_number: req.body.unit_number,
    date_packed: req.body.date_packed,
    date_stored: req.body.date_stored,
    room: req.body.room,
    unit_location: req.body.unit_location,
    description: req.body.description,
  }

  knex('boxes')
    .insert(new_box)
    .returning('*')
    .then(box => {
      res.json(box)
      })
    .catch(err => {
      console.log(err);
      next(err)
    });
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
