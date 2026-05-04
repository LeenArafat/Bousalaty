'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('interests', {
      // composite key (multi value)

      resultID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'results',
          key: 'resultID'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      interestID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      interestText: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('interests');
  }
};
