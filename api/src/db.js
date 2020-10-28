const knex = require('knex');

const db = knex({
  client: 'postgresql',
  connection: {
    host: "postgresql",
    database: 'orgo',
    user:     'orgo',
    password: 'orgo'
  }
});

module.exports = db;
