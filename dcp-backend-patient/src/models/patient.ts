import { Document, Schema, Model, model } from 'mongoose';

export interface Patient extends Document {
    _id: string;
    name: string;
    age: number;
    selectedPolicy: string;
}