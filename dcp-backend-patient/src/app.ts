// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
let express    = require('express');        // call express
let bodyParser = require('body-parser');
import session from 'express-session';
import mongoose from 'mongoose';
import compression from 'compression'; 
import expressValidator from 'express-validator';
import mongo from 'connect-mongo';
import lusca from 'lusca';
import cors from 'cors';
const MongoStore = mongo(session);
const mongoUrl = 'mongodb://localhost:27017/dcp';
// (<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, { useMongoClient: true }).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
  // process.exit();
});

// for multipart formdata
const multer = require('multer');

import * as patientController from './controllers/patient.controller';

let app        = express();                 // define our app using express

app.use(cors());
app.options("*", cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'sdfgfdsdsfsdfsdfds',
    store: new MongoStore({
      url: mongoUrl,
      autoReconnect: true
    })
  }));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  next();
});

let port = process.env.PORT || 8081;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/patient/getPatientInfo', patientController.getPatientInfo);

router.post('/patient/submitForm', patientController.createNewPatient);

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
