'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
    static associate(models) {
      // Definir la relación muchos a muchos con Tag
      Activo.belongsToMany(models.Tag, {
        through: 'ActivoTag', // Nombre de la tabla intermedia
        foreignKey: 'activoId', // Clave foránea en la tabla intermedia para el ID del activo
        otherKey: 'tagId' // Clave foránea en la tabla intermedia para el ID de la etiqueta
      });
   
    }
  }

  Activo.init({
    numSerie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    numInventario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Activo',
  });

  return Activo;
};
