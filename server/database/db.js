// const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

// export const sequelize = new Sequelize('aldeia_senai', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

export const sequelize = new Sequelize(`mysql://m9qka6ou0xy9okgpmfob:pscale_pw_JeHtjQNnMT5lgHhC2s1PZXTtXyLvgclAqQcAIviD0cF@aws.connect.psdb.cloud/aldeia_senai`, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true
    }
  }
})

export default sequelize;