'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Responsable extends Model {
    static associate(models) {
      // Asociar el responsable con activos
      Responsable.belongsToMany(models.Activo, {
        through: 'ResponsableActivo', // Nombre de la tabla intermedia
        foreignKey: 'responsableId', // Clave foránea en la tabla intermedia para el ID del responsable
        otherKey: 'activoId', // Clave foránea en la tabla intermedia para el ID del activo
        as: 'activosEnCustodia', // Alias para acceder a la relación
        constraints: false // Desactivar las restricciones de clave foránea
      });
      
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
  });

  return Responsable;
};
