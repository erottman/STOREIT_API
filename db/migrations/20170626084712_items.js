exports.up = (knex => {
  return knex.schema.createTable('items', (table) => {
    table.increments();
    table.integer('box_id').notNullable();
    table.string('box_identifier', 10).notNullable();
    table.varchar('name', 60).notNullable();
    table.integer('quantity').notNullable();
    table.decimal('value').notNullable();
    table.string('description').notNullable();
    table.text('image_url').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('items');
});
