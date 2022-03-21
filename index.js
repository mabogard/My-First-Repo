//1. import npm libraries from _nodemodules
const express = require('express');
const bodyParser= require('body-parser');


//2. Create App
const app =express();
//3. USE BODY Parser IN App
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//4. Create the route
const actionsroute=require('./actions')
app.use('/api',actionsroute)
//5.create virtual server environment
const port=5090;
app.listen(port);