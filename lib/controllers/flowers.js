const { Router } = require('express');
const Flower = require('../models/Flower');

module.exports = Router()
//get by id
  .get('/:id', async (req, res) => {
    const data = await Flower.getById(req.params.id);
    res.json(data);
  })

//get all 
  .get('/', async (req, res) => {
    const flowers = await Flower.getAll();
    const ids = flowers.map((flower) => ({ 
      id: flower.id, 
      name: flower.name
    }));
    res.json(ids);
  })
  
//post new 
  .post('/', async (req, res, next) => {
    try {
      const data = await Flower.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

//put
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Flower.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

//delete existing
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Flower.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
;

