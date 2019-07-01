"use strict";

module.exports = {
  mysql: {
    "client": "mysql",
    "connection": {
      "host": "localhost",
      "user": "root",
      "password": "voland",
      "database": "nu_test"
    },
    "pool": {
      "min": 0,
      "max": 7
    },
    "migrations": {},
    "acquireConnectionTimeout": 60000
  }
};