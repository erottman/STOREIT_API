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
      email: 'erica7650@gmail.com',
      image_url:' https://scontent.xx.fbcdn.net/v/t1.0-9/11988267_10207158928629828_620534218710411961_n.jpg?oh=065f5ada9da008a10cc0b32716d54a0d&oe=59CD892C'
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
      email: 'brandy@gmail.com',
      image_url: 'https://scontent.xx.fbcdn.net/v/t1.0-9/11988267_10207158928629828_620534218710411961_n.jpg?oh=065f5ada9da008a10cc0b32716d54a0d&oe=59CD892C'
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
      email: 'brooke@gmail.com',
      image_url: 'https://scontent.xx.fbcdn.net/v/t1.0-9/11988267_10207158928629828_620534218710411961_n.jpg?oh=065f5ada9da008a10cc0b32716d54a0d&oe=59CD892C'
    },
  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('tenents_id_seq', (SELECT MAX(id) FROM tenents))"
    )
  })
}
