const express = require('express');
const router = express.Router();
const {Ubicacion} = require('../models'); 

// Ruta para obtener todas las ubicaciones
router.get('/', async (req, res) => {
  try {
    const ubicaciones = await Ubicacion.findAll();
    res.json(ubicaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las ubicaciones' });
  }
});

// Ruta para obtener una ubicación por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const ubicacion = await Ubicacion.findByPk(id);
    if (!ubicacion) {
      return res.status(404).json({ message: 'Ubicación no encontrada' });
    }
    res.json(ubicacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la ubicación' });
  }
});

// Ruta para crear una nueva ubicación
router.post('/', async (req, res) => {
  const { descripcion, imagen } = req.body;
  try {
    const nuevaUbicacion = await Ubicacion.create({ descripcion, imagen });
    res.status(201).json(nuevaUbicacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la ubicación' });
  }
});

// Ruta para actualizar una ubicación existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { descripcion, imagen } = req.body;
  try {
    const ubicacion = await Ubicacion.findByPk(id);
    if (!ubicacion) {
      return res.status(404).json({ message: 'Ubicación no encontrada' });
    }
    await ubicacion.update({ descripcion, imagen });
    res.json(ubicacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la ubicación' });
  }
});

// Ruta para eliminar una ubicación
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const ubicacion = await Ubicacion.findByPk(id);
    if (!ubicacion) {
      return res.status(404).json({ message: 'Ubicación no encontrada' });
    }
    await ubicacion.destroy();
    res.json({ message: 'Ubicación eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la ubicación' });
  }
});

module.exports = router;
