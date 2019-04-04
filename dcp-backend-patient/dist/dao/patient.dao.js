"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PatientSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    selectedPolicy: String
}, { timestamps: true });
const PatientDBModel = mongoose_1.model('AppUser', PatientSchema);
exports.default = PatientDBModel;
//# sourceMappingURL=patient.dao.js.map