'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Ubicacion.init({
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activoAsociados: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imagen: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Ubicacion',
    tableName: 'Ubicaciones',
    name: {
    singular: 'ubicacion',
    plural: 'ubicaciones'  
    }
    
    // Optionally, define additional model options here
  });

  return Ubicacion;
};
