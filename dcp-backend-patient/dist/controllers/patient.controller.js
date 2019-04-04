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
};
exports.createNewPatient = function (req, res, next) {
    const patient = req.body.patient;
    const patientDB = new patient_dao_1.default();
    patientDB.name = patient.name;
    patientDB.age = patient.age;
    patientDB.selectedPolicy = req.body.selectedPolicy;
    patientDB.save((err, resp) => {
        console.log('db respon ', resp, 'er r us', err);
        if (err) {
            res.json({ message: 'Unable to create patient document due to an error' + err });
        }
        else {
            res.json({ message: 'created successfully' + resp });
        }
    });
};
//# sourceMappingURL=patient.controller.js.map