import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('items', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,
  });
  
  export default sequelize;