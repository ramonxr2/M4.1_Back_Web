'use strict';
const { DataTypes } = require('sequelize');

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
      },
      // Agregar columna para la clave foránea
      activoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Activos', // Nombre de la tabla a la que hace referencia
          key: 'id' // Nombre de la columna a la que hace referencia en la tabla 'Activos'
        },
        onUpdate: 'CASCADE', // Acción a tomar cuando se actualiza el 'id' en 'Activos'
        onDelete: 'SET NULL' // Acción a tomar cuando se elimina el 'id' en 'Activos'
      }
    });

    // Agregar índice para la clave foránea
    await queryInterface.addIndex('Responsables', ['activoId']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('Responsables', ['activoId']);
    await queryInterface.dropTable('Responsables');
  }
};
