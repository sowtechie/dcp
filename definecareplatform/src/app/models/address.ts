import { IAddress } from './types/IAddress';

export class Address implements IAddress {
    hno: string;
    streetName:string;
    city;
    state;
    zipCode;
}