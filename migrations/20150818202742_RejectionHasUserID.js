exports.up = function(knex, Promise) {
  return knex.schema.table('rejections', function(table) {
    table.string("idea_id");
    table.index("idea_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('rejections', function(table) {
    table.dropColumn("idea_id");
  });
};
