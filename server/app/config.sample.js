module.exports = {
  mysql: {
      "client": "mysql",
      "connection": {
        "host": "localhost",
        "user": "myuser",
        "password": "mypass",
        "database": "mydb"
      },
      "pool": {"min": 0, "max": 7},
      "migrations": {       
      },
      "acquireConnectionTimeout": 60000
    }
    
}
