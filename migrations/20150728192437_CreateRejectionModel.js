
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rejections', function(table) {
    table.increments("id");
    table.string("title");
    table.text("body");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rejections');
};
