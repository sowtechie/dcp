import { Person } from '../person';
import { Address } from '../address';

export class Doctor extends Person   {
    
    officeLocation?: Address;
    speciality:string;
}