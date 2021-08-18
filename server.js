const http = require('http');
const https = require('https');
const fs = require('fs');
const config = require('./common/config/env.config.js');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
const helmet = require("helmet");
const cors = require('cors');
var RoutesV1 = require('./app/api/1/routes/route');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin ,Authorization, Content-Type, X-Csrf-Token, X-Requested-With, Range');
    if (req.method === 'OPTIONS') 
    {
        return res.send(200);
    } 
    else 
    {
        return next();
    }
})

app.use('/', express.static(path.join(__dirname, 'app/public')));


RoutesV1.API.ridesRoute.ridesRoute(app);



app.listen(9798, function () {
    console.log('server listening on port %s', 9798);
});