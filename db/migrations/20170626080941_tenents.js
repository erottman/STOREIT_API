exports.up = (knex) => {
return knex.schema.createTable('tenents', table => {
  table.increments();
  table.integer('user_id').notNullable();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('address_line_1').notNullable();
  table.string('address_line_2');
  table.string('city').notNullable();
  table.varchar('state', 2).notNullable();
  table.integer('zip').notNullable();
  table.varchar('phone_number', 12).notNullable();
  table.string('email').notNullable();
  table.text('image_url').notNullable();
  table.timestamps(true, true)
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('tenents')
}
