'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // Definir la relación muchos a muchos con Activo
      Tag.belongsToMany(models.Activo, {
        through: 'ActivoTag', // Nombre de la tabla intermedia
        foreignKey: 'tagId', // Clave foránea en la tabla intermedia para el ID de la etiqueta
        otherKey: 'activoId' // Clave foránea en la tabla intermedia para el ID del activo
      });
    }
  }

  Tag.init({
    activoRelacionado: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Descripcion: {
      type: DataTypes.STRING
    },
    imagen: {
      type: DataTypes.BLOB
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag;
};
