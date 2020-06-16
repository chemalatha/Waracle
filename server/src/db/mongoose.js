const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/cakes-api';

mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useCreateIndex:true
});
