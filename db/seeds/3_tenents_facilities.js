exports.seed = (knex) => {
  return knex('tenents_facilities').del()
  .then(() => {
    return knex('tenents_facilities').insert([{
      tenent_id: 1,
      facility_id: 1
      }, {
      tenent_id: 2,
      facility_id: 2
      }, {
      tenent_id: 3,
      facility_id: 3
    }]);
  })
};
