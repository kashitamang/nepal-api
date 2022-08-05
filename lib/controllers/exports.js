const { Router } = require('express');
const Export_ = require('../models/Export_');

module.exports = Router()
// //get by id
//   .get('/:id', async (req, res) => {
//     const data = await Export_.getById(req.params.id);
//     res.json(data);
//   })
//get all 
  .get('/', async (req, res) => {
    const exports_ = await Export_.getAll();
    const ids = exports_.map((export_) => ({ 
      id: export_.id, 
      type: export_.type
    }));
    res.json(ids);
  });
//post 

//put 

//delete



