'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resultMajors', {
      resultMajorID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      majorID: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'majors',
          key: 'majorID'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      resultID: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'results',
          key: 'resultID'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

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
    await queryInterface.dropTable('resultMajors');
  }
};