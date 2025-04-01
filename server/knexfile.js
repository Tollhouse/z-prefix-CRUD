// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 1000,
      user: 'postgres',
      password: 'password',
      database: 'item',
      database: 'users'
    },
    migrations:{
      directory: './migrations',
    },
    seeds:{
      directory: './seeds'
    },
  }

};
