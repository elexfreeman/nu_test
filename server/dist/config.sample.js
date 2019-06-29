"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = config = {
  mysql: {
    "client": "mysql",
    "connection": {
      "host": "localhost",
      "user": "myuser",
      "password": "mypass",
      "database": "mydb"
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

exports["default"] = _default;