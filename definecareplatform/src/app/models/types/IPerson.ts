import { IAddress } from './IAddress';

export interface IPerson {
    name;
    id;
    emailId;
    phNo;
    address?: IAddress;
    role:string;
}