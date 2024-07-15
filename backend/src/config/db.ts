import { Sequelize } from 'sequelize';

const db = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
