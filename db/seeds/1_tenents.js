exports.seed = function(knex) {
  return knex('tenents').del()
  .then(() => {
    return knex('tenents').insert([{
      id: 1,
      user_id: 1,
      hashed_password: '$2a$12$LaKBUi8mCFc/9LiCtvwcvuNIjgaq9LJuy/NO.m4P5.3FP8zA6t2Va',
      first_name: 'Erica',
      last_name: 'Rottman',
      address_line_1: '123 Moving Ave',
      address_line_2: '',
      city: 'Emerald City',
      state: 'WA',
      zip: '98008',
      phone_number: '1233456789',
      email: 'erica7650@gmail.com'
  },{
      id: 2,
      user_id: 2,
      hashed_password: '$2a$12$LaKBUi8mCFc/9LiCtvwcvuNIjgaq9LJuy/NO.m4P5.3FP8zA6t2Va',
      first_name: 'Betty',
      last_name: 'Chempananical',
      address_line_1: '111 Magical Lane',
      address_line_2: '',
      city: 'Emerald City',
      state: 'WA',
      zip: '98028',
      phone_number: '1233456789',
      email: 'bettymariam@gmail.com'
},{
      id: 3,
      user_id: 3,
      hashed_password: '$2a$12$LaKBUi8mCFc/9LiCtvwcvuNIjgaq9LJuy/NO.m4P5.3FP8zA6t2Va',
      first_name: 'Amber',
      last_name: 'Murray',
      address_line_1: '555 Elm Street',
      address_line_2: '',
      city: 'Poulsbo',
      state: 'WA',
      zip: '98018',
      phone_number: '1233456789',
      email: 'amber@gmail.com'
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('tenents_id_seq', (SELECT MAX(id) FROM tenents))"
    )
  })
}
