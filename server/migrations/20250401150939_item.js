/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('item', (table) => {
    table.increments('id')
    table.integer('userid', 100)
    table.string('itemname', 100)
    table.string('description', 100)
    table.integer('quantity')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable('item')
};
