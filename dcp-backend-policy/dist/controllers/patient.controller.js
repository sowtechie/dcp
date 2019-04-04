"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const patient_dao_1 = __importDefault(require("../dao/patient.dao"));
exports.getPatientInfo = function (req, res, next) {
    const patientId = req.query['patientId'];
    console.log('fetching patient information for id', patientId);
    patient_dao_1.default.findOne({ name: 'srimai' }, (err, resp) => {
        console.log('policy retrieved is ', resp, 'err is', err);
        if (err) {
            res.json({ message: 'Unable to create patient document due to an error' + err });
        }
        else {
            res.json({ message: 'created successfully' + resp });
        }
    });
    // res.json({
    //     id: patientId,
    //     name: 'sowmya',
    //     plan: 'bronze'
    // });
};
exports.createNewPatient = function (req, res, next) {
    const patient = req.body;
    const patientDB = new patient_dao_1.default();
    patientDB.name = patient.name;
    patientDB.save((err, resp) => {
        if (err) {
            res.json({ message: 'Unable to create patient document due to an error' + err });
        }
        else {
            res.json({ message: 'created successfully' + resp });
        }
    });
};
//# sourceMappingURL=patient.controller.js.map