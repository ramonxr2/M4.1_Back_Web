'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', [
      {
        activoRelacionado: 'Dispositivo',
        Descripcion: 'Etiqueta para laptops',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activoRelacionado: 'Escritorio',
        Descripcion: 'Etiqueta para proyectores',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
