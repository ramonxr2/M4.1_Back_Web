'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Responsable extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Responsable.init({
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
    }
  }, {
    sequelize,
    modelName: 'Responsable',
    // Optionally, define additional model options here
  });

  return Responsable;
};
