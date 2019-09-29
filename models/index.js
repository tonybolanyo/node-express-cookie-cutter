import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
  }
);

const models = {
  Message: sequelize.import('./message'),
  User: sequelize.import('./user'),
}

export { sequelize };

export default models;
