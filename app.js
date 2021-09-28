// All Imported External Modules
const express = require('express');
const cors = require('cors');

const sequelize = require('./models/database');
const user = require('./routes/user');

const app = express();


// All Used Express Middlewares
app.use(express.json());
app.use(cors());
app.use('/', user);

// All Used Models Declaration
const User = require('./models/user');


sequelize
    .sync()
    .then(() => {
        app.listen(3000, () => console.log('Server started on port 3000')); 
    })
    .catch(err => {
        console.log(err);
    });