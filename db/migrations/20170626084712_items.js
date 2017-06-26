exports.up = (knex => {
  return knex.schema.createTable('items', (table) => {
    table.increments();
    table.integer('box_id').notNullable();
    table.varchar('label', 60).notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.integer('quantity').notNullable();
    table.text('image_url').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('items');
});
