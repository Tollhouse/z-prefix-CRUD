/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {firstname: 'Doug',lastname: 'Dimmadome',username: 'DD',password:"1234"},
    {firstname: 'John',lastname: 'Smith',username: 'JS',password:"1212"},
    {firstname: 'Jim',lastname: 'Johns',username: 'JJ',password:"1313"}
  ]);
};
