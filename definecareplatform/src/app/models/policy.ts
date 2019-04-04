import { Contact } from './contact';
import { IPolicy } from './types/IPolicy';

export class Policy implements IPolicy {
    policyId: string;
    policyType: string;
    price: number;
    drugs: any;
    contact: Contact;
}