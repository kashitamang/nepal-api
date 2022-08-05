const { Router } = require('express');
const Caste = require('../models/Caste');

module.exports = Router()
//get by id

//get all 
  .get('/', async (req, res) => {
    const castes = await Caste.getAll();
    const ids = castes.map((caste) => ({ 
      id: caste.id, 
      name: caste.name
    }));
    res.json(ids);
  });
//post new

//put existing 

//delete existing

