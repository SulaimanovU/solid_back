const { validationResult } = require('express-validator');
const User = require('../models/user');


exports.createUser = async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      const error = new Error('Validation failed, entered data is incorrect.');
      next(error);
    }
    
    const name = req.body.name;
    const number = req.body.number;
    
    try {
      const user = await User.findOne({ where: { name: name, number: number } });
        
      if (user) {
        res.status(200).json({ result: 'Such user already exist'})
      }
      
      
      const { id } = await User.create({
        name: name,
        number: number
      });
      
      
      res.status(200).json({ result: id });
    }
    catch(err) {
        next(err);
    }
    
}



exports.test = (req, res, next) => {
  res.status(200).json({ result: 'server works fine' });
}








