const express = require('express');
const router = express.Router();

const {ActivoTag} = require('../models'); 

// Ruta para obtener todos los registros de ActivoTags
router.get('/', async (req, res) => {
  try {
    const activoTags = await ActivoTag.findAll();
    res.json(activoTags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los registros de ActivoTags' });
  }
});

// Ruta para crear un nuevo registro de ActivoTags
router.post('/', async (req, res) => {
  const { activoId, tagId } = req.body;
  try {
    const nuevoActivoTag = await ActivoTag.create({ activoId, tagId });
    res.status(201).json(nuevoActivoTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el registro de ActivoTags' });
  }
});

// Ruta para eliminar un registro de ActivoTags
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const activoTag = await ActivoTag.findByPk(id);
    if (!activoTag) {
      return res.status(404).json({ message: 'Registro de ActivoTags no encontrado' });
    }
    await activoTag.destroy();
    res.json({ message: 'Registro de ActivoTags eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el registro de ActivoTags' });
  }
});

module.exports = router;
