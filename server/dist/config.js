"use strict";

module.exports = {
  mysql: {
    "client": "mysql",
    "connection": {
      "host": "localhost",
      "user": "root",
      "password": "",
      "database": "nu_test"
    },
    "pool": {
      "min": 0,
      "max": 7
    },
    "migrations": {
      "tableName": "knex_migrations",
      "directory": "./src/Infrastructure/SQL/Migrations"
    },
    "acquireConnectionTimeout": 60000
  }
};