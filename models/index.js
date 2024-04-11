'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Leer los archivos de modelos en el directorio actual
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && // Ignorar archivos ocultos
      file !== basename && // Ignorar este archivo (index.js)
      file.slice(-3) === '.js' && // Seleccionar archivos JS
      !file.includes('.test.js') // Ignorar archivos de prueba
    );
  })
  .forEach(file => {
    const modelDef = require(path.join(__dirname, file)); // Importar la definición del modelo
    const model = modelDef(sequelize, DataTypes); // Inicializar el modelo con Sequelize y DataTypes
    db[model.name] = model; // Agregar el modelo al objeto db
  });

// Asociar todos los modelos entre sí si tienen el método associate definido
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

// Agregar la instancia de Sequelize y la clase Sequelize al objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; // Exportar el objeto db con los modelos y Sequelize
