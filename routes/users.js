const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');

//include bcrypt in authentication
router.get('/', (req, res, next) => {
  knex('users')
  .then(users => {
    res.json(users)
  })
});

router.get('/', (req, res, next) => {
  const user = { username : req.query.username,
                 password: req.query.password }
  knex('users')
    .where({user})
    .then(user => res.json(user))
    .catch(err => next(err));
});

router.post('/login', (req, res, next) => {
  const checkuser = { username : req.body.username,
                 password: req.body.password }
  knex('users')
    .where('username', checkuser.username)
    .then(user => {
      console.log(user);
      if (user[0].password == checkuser.password){
        res.json(user)
      } else {
        res.json({error: "Username or Password does not match"})
      }
    })
    .catch(err => {
      next(err)
    });
});


//tenent details
router.get('/:id', (req, res, next) => {
  knex('tenents')
    .where('user_id', req.params.id)
    .then(tenent => res.json(tenent))
    .catch(err => next(err));
});

//adding a new tenent
router.post('/', (req, res, next) => {
  let new_user = {
    username: req.body.username,
    password: req.body.password
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
      email: req.body.email };

    return knex('customers')
      .insert({new_customer})
      .returning('*')
      .then(customer => {
        res.json(customer)
      })
  })
  .catch(err => next(err));
});



//edit tenent details
router.patch('/:id', (req, res, next) => {
  let tenent = {
    username: req.body.username,
    password: req.body.password
  }

  knex('users')
    .update({ user })
    .where({id: req.params.id})
    .returning('*')
    .then(user => {
      let tenent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address_line_1: req.body.address_line1,
        address_line_2: req.body.address_line2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zipcode,
        phone_number: req.body.phone_number,
        email: req.body.email };

      return knex('tenents')
        .update({tenent})
        .where({user_id: user.id})
        .returning('*')
        .then(tenent => {
          res.json(tenent)
        })
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  knex('users')
    .del()
    .where({id: req.params.id})
    .then(() => {
      return knex('tenents')
        .del()
        .where({user_id: req.params.id})
    })
    .then(() => res.end())
    .catch(err => next(err));
});



module.exports = router;
