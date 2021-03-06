exports.up = function (knex) {
  return knex.schema.createTable("users", (usersTable) => {
    usersTable.text("username").primary().notNullable();
    usersTable.string("avatar_url");
    usersTable.text("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
