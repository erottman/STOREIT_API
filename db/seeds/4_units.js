exports.seed = (knex) => {
  return knex('units').del()
  .then(() => {
    return knex('units').insert([{
      id:1,
      tenent_id: 1,
      facility_id: 2,
      unit_number: 111
      }, {
      id:2,
      tenent_id: 2,
      facility_id: 2,
      unit_number: 222
      },{
      id:3,
      tenent_id: 3,
      facility_id: 3,
      unit_number: 333
    }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));"
    );
  });
};
