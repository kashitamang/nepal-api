const { Router } = require('express');
const District = require('../models/District');

module.exports = Router()
//get by id
  .get('/:id', async (req, res) => {
    const data = await District.getById(req.params.id);
    res.json(data);
  })

//get all 
  .get('/', async (req, res) => {
    const districts = await District.getAll();
    const ids = districts.map((district) => ({ 
      id: district.id, 
      name: district.name
    }));
    res.json(ids);
  })

//post new
  .post('/', async (req, res, next) => {
    try {
      const data = await District.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
//put existing 
  .put('/:id', async (req, res, next) => {
    try {
      const data = await District.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
//delete existing
