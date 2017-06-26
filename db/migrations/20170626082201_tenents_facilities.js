exports.up = (knex => {
  return knex.schema.createTable('tenents_facilities', (table) => {
    table.integer('tenent_id').notNullable();
    table.integer('facility_id').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('tenents_facilities');
});
