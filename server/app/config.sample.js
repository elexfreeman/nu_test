module.exports = {
  server: {
    "port": 3005
  },
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
    },
  mongodb: {
    "connection": "mongodb://my_host_name/clients_app"
  }
    
}
