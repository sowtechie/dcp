import { IContact } from './types/IContact';

export class Contact implements IContact {
    name: string;
    phNo: number;
    emailId: string;
}