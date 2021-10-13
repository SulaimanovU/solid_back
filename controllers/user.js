const { validationResult } = require('express-validator');
const User = require('../models/user');
const websiteData = require('../models/web-data');

exports.createUser = async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      const error = new Error('Validation failed, entered data is incorrect.');
      next(error);
    }
    
    const name = req.body.name;
    const number = req.body.number;
    const from = req.body.from;
    
    try {
      const user = await User.findOne({ where: { name: name, number: number } });
        
      if (user) {
        res.status(200).json({ result: 'Such user already exist'})
      }
      else {
        const { id } = await User.create({
          name: name,
          number: number,
          from: from
        });
        
        res.status(200).json({ result: id });
      }
      
    }
    catch(err) {
        next(err);
    }
    
}



exports.test = (req, res, next) => {
  res.status(200).json({ result: 'server works fine' });
}



exports.getData = async (req, res, next) => {

  try {
    res.status(200).json(websiteData);
  }
  catch(err) {
    next(err);
  }
  
}




