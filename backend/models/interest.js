'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      interest.belongsTo(models.result, { foreignKey: 'resultID' })
      models.result.hasMany(interest, { foreignKey: 'resultID' })

    }
  }
  interest.init({
    interestID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    resultID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    interestText: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'interest',
  });
  return interest;
};