/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    {id: 1, userid: 1, itemname: 'Dougs Dale Dimmadome', description: 'The Dougs Dale Dimmadome. We boxed the whole thing up and will get to finding it how to move it around later. TODO: Find out how many heavy lifters we are going to need to move a giant stadium.', quantity: 1},
    {id: 2, userid: 2, itemname: 'Big Hat', description: 'A massive cowboy hat for fashion purposes', quantity: 5},
    {id: 3, userid: 3, itemname: 'Sandwich', description: 'Way to many sandwiches. Start handing these out to whoever you find', quantity: 1500}
  ]);
};
