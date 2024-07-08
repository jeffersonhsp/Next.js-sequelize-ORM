// sequelize.ts
import { Sequelize, Options, Op } from 'sequelize';




const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });

export default sequelize;