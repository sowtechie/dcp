"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const policy_dao_1 = __importDefault(require("../dao/policy.dao"));
exports.getPolicyInfo = function (req, res, next) {
    const policyType = req.query['policyType'];
    console.log('fetching policy info for ', policyType);
    policy_dao_1.default.findOne({ policyType: policyType }, (err, policy) => {
        console.log('policy retrieved is ', policy, 'err is', err);
        if (err) {
            res.json({ message: 'Unable to fetch Policy document due to an error' + err });
        }
        else {
            res.json({ policy: policy });
        }
    });
};
exports.createNewPolicy = function (req, res, next) {
    const policy = req.body;
    console.log('policy is', policy);
    const policyDB = new policy_dao_1.default();
    policyDB.policyId = policy.policyId;
    policyDB.policyType = policy.policyType;
    policyDB.price = policy.price;
    policyDB.contact = policy.contact;
    policyDB.drugs = policy.drugs;
    policyDB.save((err, resp) => {
        console.log('new created policy is ', resp, 'err is ', err);
        if (err) {
            res.json({ message: 'Unable to create patient document due to an error' + err });
        }
        else {
            res.json({ message: 'created successfully' + resp });
        }
    });
};
//# sourceMappingURL=policy.controller.js.map