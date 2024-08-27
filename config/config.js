require("dotenv")=config();
const {DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;


module.exports = {
  "development": {
    "username": DB_USER || "postgres",
    "password": DB_PASS || "postgres",
    "database": DB_NAME || "todo_app",
    "host": DB_HOST || "db",
    "port": DB_PORT || 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "todo_app_test",
    "host": "db",
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
