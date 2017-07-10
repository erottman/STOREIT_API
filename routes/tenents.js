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
    .then(tenent => res.json(tenent[0]))
    .catch(err => next(err));
});

router.put('/:id', (req, res, next) => {
  console.log('body', req.body);
  knex('tenents')
    .update(req.body)
    .where({id: req.params.id})
    .returning('*')
    .then(tenents => res.json(tenents[0]))
    .catch(err => next(err));
});



router.post('/', (req, res, next) => {
  let new_user = {
    username: req.body.username,
    password: req.body.password,
    role_id: 4
  }

  knex('users')
    .insert({ new_user })
    .returning('*')
    .then(user => {
      let new_tenent = {
        user_id: user.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address_line_1: req.body.address_line1,
        address_line_2: req.body.address_line2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zipcode,
        phone_number: req.body.phone_number,
        email: req.body.email,
        image_url: req.body.phone_number};

      return knex('tenents')
        .insert({new_tenent})
        .returning('*')
        .then(tenent => {
          res.json(tenent)
        })
    })
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
