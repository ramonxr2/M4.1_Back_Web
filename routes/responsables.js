const express = require('express');
const router = express.Router();

const {Responsable} = require('../models');  

// Ruta para obtener todos los responsables
router.get('/', async (req, res) => {
  try {
    const responsables = await Responsable.findAll();
    res.json(responsables);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los responsables' });
  }
});

// Ruta para obtener un responsable por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const responsable = await Responsable.findByPk(id);
    if (!responsable) {
      return res.status(404).json({ message: 'Responsable no encontrado' });
    }
    res.json(responsable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el responsable' });
  }
});

// Ruta para crear un nuevo responsable
router.post('/', async (req, res) => {
  const { numeroDeEmpleado, nombre, activosEnCustodia, imagen } = req.body;
  try {
    const nuevoResponsable = await Responsable.create({ numeroDeEmpleado, nombre, activosEnCustodia, imagen });
    res.status(201).json(nuevoResponsable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el responsable' });
  }
});

// Ruta para actualizar un responsable existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { numeroDeEmpleado, nombre, activosEnCustodia, imagen } = req.body;
  try {
    const responsable = await Responsable.findByPk(id);
    if (!responsable) {
      return res.status(404).json({ message: 'Responsable no encontrado' });
    }
    await responsable.update({ numeroDeEmpleado, nombre, activosEnCustodia, imagen });
    res.json(responsable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el responsable' });
  }
});

// Ruta para eliminar un responsable
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const responsable = await Responsable.findByPk(id);
    if (!responsable) {
      return res.status(404).json({ message: 'Responsable no encontrado' });
    }
    await responsable.destroy();
    res.json({ message: 'Responsable eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el responsable' });
  }
});

module.exports = router;
