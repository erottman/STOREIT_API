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
    .then(item => res.json(item[0]))
    .catch(err => next(err));
});

router.put('/:id', (req, res, next) => {
  console.log('body', req.body);
  knex('items')
    .update(req.body)
    .where({id: req.params.id})
    .returning('*')
    .then(items => res.json(items[0]))
    .catch(err => next(err));
});


router.post('/', (req, res, next) => {
  console.log("im here");
  let new_item = {
    box_id: req.body.box_id,
    box_identifier: req.body.box_identifier,
    name: req.body.name,
    quantity: req.body.quantity,
    value: req.body.value,
    description: req.body.description,
    image_url: req.body.image_url,
  }

  knex('items')
    .insert(new_item)
    .returning('*')
    .then(item => {
      res.json(item[0])
      })
    .catch(err => {
      console.log(err);
      next(err)
    });
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
