exports.up = (knex) => {
return knex.schema.createTable('tenents', table => {
  table.increments();
  table.varchar('first_name', 60).notNullable();
  table.varchar('last_name',60).notNullable();
  table.varchar('address_line_1', 255).notNullable();
  table.varchar('address_line_2', 255);
  table.varchar('city', 60).notNullable();
  table.varchar('state', 2).notNullable();
  table.integer('zip').notNullable();
  table.varchar('phone_number', 12).notNullable();
  table.varchar('email_address', 60).notNullable();
  table.integer('user_id').notNullable();
  table.specificType('hashed_password', 'char(60)').notNullable();
  table.timestamps(true, true)
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('tenents')
}
