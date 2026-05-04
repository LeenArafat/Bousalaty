'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentMajors', {
      studentMajorID: {
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
      studentID: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'students',
          key: 'studentID'
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
    await queryInterface.dropTable('studentMajors');
  }
};