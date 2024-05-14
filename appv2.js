const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');

// Importar modelos y rutas
const { 
  Activo, 
  Activotags, 
  Responsable, 
  Tag, 
  Ubicacion, 
  Usuario 
} = require('./models');

const activosRouter = require('./routes/activos');
const activotagsRouter = require('./routes/activotags');
const responsablesRouter = require('./routes/responsables');
const tagsRouter = require('./routes/tags');
const ubicacionesRouter = require('./routes/ubicaciones');
const usuariosRouter = require('./routes/usuarios');

const app = express();

// Configuración de Sequelize
const sequelize = new Sequelize('inventario2', 'backenduser', 'superpassword', {
  host: 'localhost',
  dialect: 'mysql'
});

// Asociaciones entre modelos, si es necesario
// Activo.hasMany(Activotags);
// ...

// Middleware de parseo de JSON
app.use(express.json());
 
// Middleware de parseo de URL-encoded
app.use(express.urlencoded({ extended: true }));

// Middleware de CORS
app.use(cors());

// Rutas
app.use('/api/activos', activosRouter);
app.use('/api/ubicaciones', ubicacionesRouter);
app.use('/api/activotags', activotagsRouter);
app.use('/api/responsables', responsablesRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/usuarios', usuariosRouter);

// Middleware para manejar errores globalmente
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
