import { IContact } from './IContact';

export interface IPolicy {
    policyId: string,
    policyType: string;
    price: number;
    drugs: any,
    contact: IContact;
}