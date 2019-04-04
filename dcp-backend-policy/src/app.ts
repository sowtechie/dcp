// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
let express    = require('express');        // call express
let bodyParser = require('body-parser');
import session from 'express-session';
import mongoose from 'mongoose';
import mongo from 'connect-mongo';
import cors from 'cors';

import * as policyController from './controllers/policy.controller';

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

let app        = express();                 // define our app using express

app.use(cors());
app.options("*", cors());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'sdfgfdsdsfsdfsdfds',
    store: new MongoStore({
      url: mongoUrl,
      autoReconnect: true
    })
  }));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8083;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

router.post('/policy/newPolicy', policyController.createNewPolicy);

router.get('/policy/getPolicyInfo', policyController.getPolicyInfo);

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
