exports.seed = function(knex) {
  return knex('tenents').del()
  .then(() => {
    return knex('tenents').insert([{
      id: 1,
      user_id: 1,
      first_name: 'Erica',
      last_name: 'Rottman',
      address_line_1: '123 Moving Ave',
      address_line_2: '',
      city: 'Emerald City',
      state: 'WA',
      zip: '98126',
      phone_number: '1233456789',
      email: 'erica7650@gmail.com'
  },{
      id: 2,
      user_id: 2,
      first_name: 'Brandy',
      last_name: 'Welch',
      address_line_1: '111 Magical Lane',
      address_line_2: '',
      city: 'Emerald City',
      state: 'WA',
      zip: '98028',
      phone_number: '1233456789',
      email: 'brandy@gmail.com'
},{
      id: 3,
      user_id: 3,
      first_name: 'Brooke',
      last_name: 'Orsen',
      address_line_1: '555 Elm Street',
      address_line_2: '',
      city: 'Bremerton',
      state: 'WA',
      zip: '98310',
      phone_number: '1233456789',
      email: 'brooke@gmail.com'
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('tenents_id_seq', (SELECT MAX(id) FROM tenents))"
    )
  })
}
