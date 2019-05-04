import { Document, Schema, Model, model } from 'mongoose';

export interface Provider extends Document {
    _id: string;
    id: number,
    name: string;
    age: number;
    selectedPolicy: string;
}