import PolicyDBModel from "../dao/policy.dao";

export let getPolicyInfo = function(req, res, next) {
    const policyType = req.query['policyType'];
    console.log('fetching policy info for ', policyType);
    PolicyDBModel.findOne({policyType: policyType}, (err, policy) => {
        console.log('policy retrieved is ', policy, 'err is', err)
        if (err) {
            res.json({message: 'Unable to fetch Policy document due to an error' + err});
        } else {
            res.json({thisismypolicy: policy});
        }
    });
};

export let createNewPolicy = function(req, res, next) {
    const policy = req.body;
    console.log('policy is', policy);
    const policyDB = new PolicyDBModel();
    policyDB.policyId = policy.policyId;
    policyDB.policyType = policy.policyType;
    policyDB.price = policy.price;
    policyDB.contact = policy.contact;
    policyDB.drugs = policy.drugs;
    policyDB.save((err, resp) => {
        console.log('new created policy is ', resp, 'err is ', err);
        if (err) {
            res.json({message: 'Unable to create patient document due to an error' + err});
        } else {
            res.json({message: 'created successfully' + resp});
        }
    });

};