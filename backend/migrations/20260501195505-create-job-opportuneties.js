'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobOpportuneties', {
      oppoID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      majorID: {
        type: Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        references : {
            model : 'majors' ,
            key : 'majorID'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      opportunity : {
        allowNull : false ,
        type : Sequelize.STRING
      } ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jobOpportuneties');
  }
};