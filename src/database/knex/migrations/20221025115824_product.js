exports.up = (knex) =>
  knex.schema.createTable("product", (table) => {
    table.increments("id");
    table.text("banner");
    table.text("name");
    table.text("ingredient");
    table.text("description");
    table.float("price");
  });

exports.down = (knex) => knex.schema.dropTable("product");
