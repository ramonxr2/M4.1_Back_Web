'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Responsables', [
      {
        numeroDeEmpleado: 12345,
        nombre: 'Responsable1',
        activosEnCustodia: 'Laptop, Teléfono',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numeroDeEmpleado: 54321,
        nombre: 'Responsable2',
        activosEnCustodia: 'Tablet',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Agregar más registros según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Responsables', null, {});
  }
};
