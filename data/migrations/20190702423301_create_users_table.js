
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl
          .string('username')
          .notNullable()
          .unique();
      tbl
          .string('password')
          .notNullable();
      tbl
          .string('department')
          .notNullable();
      tbl
          .timestamp('createdAt')
          .defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  