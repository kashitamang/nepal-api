const { Router } = require('express');
const District = require('../models/District');

module.exports = Router()
//get all 
  .get('/', async (req, res) => {
    const districts = await District.getAll();
    const ids = districts.map((district) => ({ 
      id: district.id, 
      name: district.name
    }));
    res.json(ids);
  })
  
//get by ID
//post new
//patch existing 
//delete existing
;
