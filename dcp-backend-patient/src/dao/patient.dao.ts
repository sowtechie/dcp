import { Document, Schema, Model, model } from 'mongoose';
import { ObjectID } from 'bson';
import { Patient } from '../models/patient';

const PatientSchema = new Schema({
    name: String,
    age: Number,
    selectedPolicy: String
}, { timestamps: true });

const PatientDBModel: Model<Patient> = model<Patient>('AppUser', PatientSchema);
export default PatientDBModel;