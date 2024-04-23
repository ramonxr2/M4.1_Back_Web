'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ubicaciones', [
      {
        descripcion: 'Oficina principal',
        activoAsociados: 'Laptop, Teléfono',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Sala de reuniones',
        activoAsociados: 'Proyector, Monitor',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ubicaciones', null, {});
  }
};
