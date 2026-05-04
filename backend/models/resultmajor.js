'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resultMajor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      resultMajor.belongsTo(models.result, { foreignKey: 'resultID' })
      models.result.belongsToMany(models.major, { through: 'resultMajors', foreignKey: 'resultID' })

      resultMajor.belongsTo(models.major, { foreignKey: 'majorID' })
      models.major.belongsToMany(models.result, { through: 'resultMajors', foreignKey: 'majorID' })
    }
  }
  resultMajor.init({
    resultMajorID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    resultID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    majorID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'resultMajor',
  });
  return resultMajor;
};