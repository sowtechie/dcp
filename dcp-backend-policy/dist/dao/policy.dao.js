"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PolicySchema = new mongoose_1.Schema({
    policyId: String,
    policyType: String,
    price: Number,
    drugs: {
        genericDrugs: Array,
        brandedDrugs: Array
    },
    contact: {
        name: String,
        phNo: Number,
        emailId: String
    }
}, { timestamps: true });
const PolicyDBModel = mongoose_1.model('Policy', PolicySchema);
exports.default = PolicyDBModel;
//# sourceMappingURL=policy.dao.js.map