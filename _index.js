import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
  }
);

var userModel = sequelize.import('./user');
var msgModel = sequelize.import('./message');

console.log(sequelize);

const models = {
  User: userModel,
  Message: msgModel,
};

Object.keys(models).forEach(key => {
  console.log(`### Making associations (${key})`);
  if ('associate' in models[key]) {
    console.log(`...Associating ${key}...`);
    models[key].associate(models);
  }
});


export { sequelize };

export default models;
