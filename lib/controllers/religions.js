const { Router } = require('express');
const Religion = require('../models/Religion');

module.exports = Router()
//get by id

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

//put 

//delete
;
