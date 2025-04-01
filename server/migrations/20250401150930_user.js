/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.string('firstname', 100)
        table.string('lastname', 100)
        table.string('username', 100)
        table.string('password', 100)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('users')
};
