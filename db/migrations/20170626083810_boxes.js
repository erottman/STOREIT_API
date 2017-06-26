exports.up = (knex => {
  return knex.schema.createTable('boxes', (table) => {
    table.increments();
    table.integer('unit_id').notNullable();
    table.varchar('label', 60).notNullable();
    table.string('description').notNullable()
    table.string('room').notNullable();
    table.string('date_packed').notNullable();
    table.string('date_stored').notNullable();
    table.string('unit_location').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('boxes');
});
