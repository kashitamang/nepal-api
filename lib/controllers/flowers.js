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

//patch 

//delete

;
