
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ideas', function(table) {
    table.increments("id");
    table.string("description");
    table.integer("level");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ideas');
};
