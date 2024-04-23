'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    static associate(models) {
      // Falta asociar ubicaciones con los activos
      Ubicacion.belongsTo(models.Activo, {
        foreignKey: 'activoAsociados',
        targetKey: 'descripcion', // Campo en Activo que se relaciona con activoAsociados en Ubicacion
        as: 'activo' // Alias para acceder a la relación
      });
      
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
    
  });

  return Ubicacion;
};
