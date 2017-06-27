exports.up = (knex) => {
return knex.schema.createTable('facilities', table => {
  table.increments()
  table.string('name').notNullable()
  table.text('description').notNullable()
  table.string('address_line_1').notNullable();
  table.string('address_line_2');
  table.string('city').notNullable();
  table.varchar('state', 2).notNullable();
  table.integer('zip').notNullable();
  table.varchar('phone_number',12).notNullable();
  table.string('logo_img');
  table.string('url');
  table.timestamps(true, true);
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('facilities')
}
