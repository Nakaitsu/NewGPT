// const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

export const sequelize = new Sequelize('aldeia_senai', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
