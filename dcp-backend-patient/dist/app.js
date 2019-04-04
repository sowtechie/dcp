"use strict";
// server.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
// BASE SETUP
// =============================================================================
// call the packages we need
let express = require('express'); // call express
let bodyParser = require('body-parser');
const express_session_1 = __importDefault(require("express-session"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const express_validator_1 = __importDefault(require("express-validator"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const lusca_1 = __importDefault(require("lusca"));
const cors_1 = __importDefault(require("cors"));
const MongoStore = connect_mongo_1.default(express_session_1.default);
const mongoUrl = 'mongodb://localhost:27017/dcp';
// (<any>mongoose).Promise = bluebird;
mongoose_1.default.connect(mongoUrl, { useMongoClient: true }).then(() => { }).catch(err => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    // process.exit();
});
// for multipart formdata
const multer = require('multer');
const patientController = __importStar(require("./controllers/patient.controller"));
let app = express(); // define our app using express
app.use(cors_1.default());
app.options("*", cors_1.default());
app.use(compression_1.default());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_validator_1.default());
app.use(express_session_1.default({
    resave: true,
    saveUninitialized: true,
    secret: 'sdfgfdsdsfsdfsdfds',
    store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
    })
}));
app.use(lusca_1.default.xframe('SAMEORIGIN'));
app.use(lusca_1.default.xssProtection(true));
app.use((req, res, next) => {
    next();
});
let port = process.env.PORT || 8081; // set our port
// ROUTES FOR OUR API
// =============================================================================
let router = express.Router(); // get an instance of the express Router
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
//# sourceMappingURL=app.js.map