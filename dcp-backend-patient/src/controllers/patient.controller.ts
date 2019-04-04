import PatientDBModel from '../dao/patient.dao'


export let getPatientInfo = function(req, res, next) {
    const patientId = req.query['patientId'];
    console.log('fetching patient information for id', patientId);
    PatientDBModel.findOne({name: 'srimai'}, (err, resp) => {
        console.log('policy retrieved is ', resp, 'err is', err)
        if (err) {
            res.json({message: 'Unable to create patient document due to an error' + err});
        } else {
            res.json({message: 'created successfully' + resp});
        }
    });
};

export let createNewPatient = function(req, res, next) {
    const patient = req.body.patient;
    const patientDB = new PatientDBModel();
    patientDB.name = patient.name;
    patientDB.age = patient.age;
    patientDB.selectedPolicy = req.body.selectedPolicy;
    patientDB.save((err, resp) => {
        console.log('db respon ', resp, 'er r us', err)
        if (err) {
            res.json({message: 'Unable to create patient document due to an error' + err});
        } else {
            res.json({message: 'created successfully' + resp});
        }
    });
};