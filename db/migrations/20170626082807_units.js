exports.up = (knex => {
  return knex.schema.createTable('units', (table) => {
    table.increments();
    table.integer('tenent_id').notNullable();
    table.integer('facility_id').notNullable();
    table.integer('unit_number').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('units');
});
