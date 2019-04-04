import { Document, Schema, Model, model } from 'mongoose';
import { Contact } from './contact';

export interface Policy extends Document {
    policyId: string,
    policyType: string;
    price: number;
    drugs: Drugs,
    contact: Contact;
}

export class Drugs {
    genericDrugs: Array<string>;
    brandedDrugs: Array<string>;
}