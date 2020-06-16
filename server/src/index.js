const express = require('express');
require('./db/mongoose');

const cakeRouter = require('./routers/cake');

const app = express();

const port = process.env.PORT || 5000;
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "OPTIONS, HEAD, GET,DELETE,PATCH");
    next();
  }
app.use(allowCrossDomain);

app.use(express.json());
app.use(cakeRouter);


app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})
