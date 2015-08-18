exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_ideas', function(table) {
    table.increments("id");
    table.integer("user_id");
    table.integer("idea_id");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_ideas');
};
