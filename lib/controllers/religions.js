const { Router } = require('express');
const Religion = require('../models/Religion');

module.exports = Router()
//get by id
  .get('/:id', async (req, res) => {
    const data = await Religion.getById(req.params.id);
    res.json(data);
  })
//get all 
  .get('/', async (req, res) => {
    const religions = await Religion.getAll();
    const ids = religions.map((religion) => ({ 
      id: religion.id, 
      type: religion.type
    }));
    res.json(ids);
  })
  
//post 
  .post('/', async (req, res, next) => {
    try {
      const data = await Religion.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

//put 

//delete
;
