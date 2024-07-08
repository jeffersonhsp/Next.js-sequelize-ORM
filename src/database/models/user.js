'use strict';
const { Model, DataTypes } = require('sequelize');
import sequelize from '@/src/database/config/sequelize';

class User extends Model {
  static associate(models) {
  }
}
User.init({
  user: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: 'User',
});

export default User