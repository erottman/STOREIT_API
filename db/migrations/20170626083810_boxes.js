exports.up = (knex => {
  return knex.schema.createTable('boxes', (table) => {
    table.increments();
    table.integer('unit_id');
    table.varchar('identifier', 10).notNullable();
    table.integer('unit_number').notNullable();
    table.varchar('date_packed',8).notNullable();
    table.varchar('date_stored',8).notNullable();
    table.string('room').notNullable();
    table.string('unit_location').notNullable();
    table.text('description').notNullable()
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('boxes');
});
