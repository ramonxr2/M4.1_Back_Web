'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Usuario1',
        password: 'password1',
        numeroDeEmpleado: 12345,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Usuario2',
        password: 'password2',
        numeroDeEmpleado: 54321,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});

  }
};
