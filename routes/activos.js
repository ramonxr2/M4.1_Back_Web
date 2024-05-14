const express = require('express');
const router = express.Router();

const {Activo} = require('../models');

// Ruta para obtener todos los activos
router.get('/', async (req, res) => {
    try {
      const activos = await Activo.findAll();
      res.json(activos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los activos' });
    }
});

// Ruta para obtener un Activo por su ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const activo = await Activo.findByPk(id);
      if (!activo) {
        return res.status(404).json({ message: 'Activo no encontrado' });
      }
      res.json(activo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener el activo' });
    }
});

// Ruta para crear un nuevo activo
router.post('/', async (req, res) => {
    const { numSerie, numInventario, descripcion } = req.body;
    try {
      const nuevoActivo = await Activo.create({ numSerie, numInventario, descripcion });
      res.status(201).json(nuevoActivo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el activo' });
    }
});

// Ruta para actualizar un Activo existente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { numSerie, numInventario, descripcion, imagen } = req.body;
    try {
      let activo = await Activo.findByPk(id);
      if (!activo) {
        return res.status(404).json({ message: 'Activo no encontrado' });
      }
      activo = await activo.update({ numSerie, numInventario, descripcion, imagen });
      res.json(activo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el activo' });
    }
});

// Ruta para eliminar un activo
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const activo = await Activo.findByPk(id);
      if (!activo) {
        return res.status(404).json({ message: 'Activo no encontrado' });
      }
      await activo.destroy();
      res.json({ message: 'Activo eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el activo' });
    }
});

module.exports = router;
