import { Document, Schema, Model, model } from 'mongoose';
import { ObjectID } from 'bson';
import { Policy } from '../models/policy';

const PolicySchema = new Schema({
    policyId: String,
    policyType: String,
    price: Number,
    drugs: {
        genericDrugs: Array,
        brandedDrugs: Array
    },
    contact: {
        name: String,
        phNo: Number,
        emailId: String
    }
}, { timestamps: true });

const PolicyDBModel: Model<Policy> = model<Policy>('Policy', PolicySchema);
export default PolicyDBModel;