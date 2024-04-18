'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(models.Responsable, {
        foreignKey: 'numeroDeEmpleado',
        targetKey: 'numeroDeEmpleado'
      });
    }    
  }

  Usuario.init({ //Determinar si enlazar el numero de empleado del Responsable con Usuario
    nombre: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};