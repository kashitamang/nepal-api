const { Router } = require('express');
const Caste = require('../models/Caste');

module.exports = Router()
//get by id
  .get('/:id', async (req, res) => {
    const data = await Caste.getById(req.params.id);
    res.json(data);
  })

//get all 
  .get('/', async (req, res) => {
    const castes = await Caste.getAll();
    const ids = castes.map((caste) => ({ 
      id: caste.id, 
      name: caste.name
    }));
    res.json(ids);
  })
//post new
  .post('/', async (req, res, next) => {
    try {
      const data = await Caste.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
//put existing 
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Caste.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

//delete existing
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Caste.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });

