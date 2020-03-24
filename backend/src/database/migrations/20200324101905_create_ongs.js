
exports.up = function(knex) {
    // método up: o que eu quero fazer
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
    // método down: o que desfazer se houver algum problema
  return knex.schema.dropTable('ongs');
};
