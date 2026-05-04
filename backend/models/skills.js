'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      skills.belongsTo(models.major, { foreignKey: 'majorID' });
      models.major.hasMany(skills, { foreignKey: 'majorID' });
      
    }
  }
  skills.init({
    skillID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    majorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    skill : {
      // it can be null (on creation)
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'skills',
  });
  return skills;
};