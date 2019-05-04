import { Document, Schema, Model, model } from 'mongoose';
import { ObjectID } from 'bson';
import { Provider } from '../models/providers';

const ProvidersSchema = new Schema({
    id: Number,
    providersAddress: String,
    providersContact: String,
    providersPrice: Number,
    providersSpecialization: String,
    specialization: {
        gyneac:String,
        cardioc:String,
        physician:String,
        pediatric:String,
        dermatologist:String
    },
    contact: {
        name: String,
        phNo: Number,
        emailId: String,
        Address:String
    }
    
    
}, { timestamps: true });

const ProvidersDBModel: Model<Provider> = model<Provider>('Providers', ProvidersSchema);
export default ProvidersDBModel;