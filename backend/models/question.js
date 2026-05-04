'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      question.hasMany(models.option, { foreignKey: 'questionID' })
      models.option.belongsTo(question, { foreignKey: 'questionID' })

      question.hasMany(models.response, { foreignKey: 'questionID' })
      models.response.belongsTo(question, { foreignKey: 'questionID' })
    }
  }
  question.init({
    questionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    questionText: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};