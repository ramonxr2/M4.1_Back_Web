const express = require('express');
const router = express.Router();
const {Tag} = require('../models'); 

// Ruta para obtener todos los tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los tags' });
  }
});

// Ruta para obtener un tag por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      return res.status(404).json({ message: 'Tag no encontrado' });
    }
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el tag' });
  }
});

// Ruta para crear un nuevo tag
router.post('/', async (req, res) => {
  const { activoRelacionado, descripcion, imagen } = req.body;
  try {
    const nuevoTag = await Tag.create({ activoRelacionado, descripcion, imagen });
    res.status(201).json(nuevoTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el tag' });
  }
});

// Ruta para actualizar un tag existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { activoRelacionado, descripcion, imagen } = req.body;
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      return res.status(404).json({ message: 'Tag no encontrado' });
    }
    await tag.update({ activoRelacionado, descripcion, imagen });
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el tag' });
  }
});

// Ruta para eliminar un tag
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      return res.status(404).json({ message: 'Tag no encontrado' });
    }
    await tag.destroy();
    res.json({ message: 'Tag eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el tag' });
  }
});

module.exports = router;
