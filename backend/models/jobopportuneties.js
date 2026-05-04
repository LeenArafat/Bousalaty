'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobOpportuneties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      jobOpportuneties.belongsTo(models.major, { foreignKey : 'majorID' });
      models.major.hasMany(jobOpportuneties, { foreignKey : 'majorID' });
    }
  }
  jobOpportuneties.init({
    oppoID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    majorID: {
      type: DataTypes.INTEGER,
      allowNull : false,
      primaryKey : true,
      references : {
          model : 'majors' ,
          key : 'majorID'
        }
    },
    opportunity : {
      allowNull : false ,
      type : DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'jobOpportuneties',
  });
  return jobOpportuneties;
};