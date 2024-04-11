'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Responsables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numeroDeEmpleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      nombre: {
        type: DataTypes.STRING,
       allowNull: false
      },
      activosEnCustodia: {
        type: DataTypes.STRING,
        allowNull: true
      },
      imagen: {
        type: DataTypes.BLOB,
        allowNull: true
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
    await queryInterface.dropTable('Responsables');
  }
};