
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments("id");
    table.text("body");
    table.integer("user_id");
    table.integer("rejection_id");
    table.timestamps();

    table.index("user_id");
    table.index("rejection_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
