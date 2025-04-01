/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').insert([
    {id: 1, userid: 1, itemname: 'Dougs Dale Dimmadome', description: 'The Dougs Dale Dimmadome', quantity: 1}
  ]);
};
