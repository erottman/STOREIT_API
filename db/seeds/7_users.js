exports.seed = (knex) => {
  return knex('users').del()
  .then(() => {
    return knex('users').insert([{
        id:1,
        username: 'erica',
        password: 'erica',
      }, {
        id:2,
        username: 'brandy',
        password: 'brandy',
      },{
        id:3,
        username: 'brooke',
        password: 'brooke',
      }
    ]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
    );
  });
};
