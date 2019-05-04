import ProvidersDBModel from "../dao/providers.dao";

export let getProvidersList = function(req, res, next) {
    const searchById = req.query['searchById'];
    console.log('fetching providers info for ', searchById);
    ProvidersDBModel.findOne({id: searchById}, (err, providers) => {
        console.log('providers retrieved is ', providers, 'err is', err)
        if (err) {
            res.json({message: 'Unable to fetch Providers document due to an error' + err});
        } else {
            res.json({thisismyproviderslist: providers});
        }
    });
};

// export let createNewProviders = function(req, res, next) {
//     const providers = req.body;
//     console.log('providers is', providers);
//     const providersDB = new ProvidersDBModel();
//     providersDB.providersList = providers.providersList;
//     providersDB.price = providers.price;
//     providersDB.contact = providers.contact;
//     providersDB.officeLocation = providers.officeLocation;
//     providersDB.specialization = providers.specialization;
//     providersDB.save((err, resp) => {
//         console.log('new created providers is ', resp, 'err is ', err);
//         if (err) {
//             res.json({message: 'Unable to create patient document due to an error' + err});
//         } else {
//             res.json({message: 'created successfully' + resp});
//         }
//     });

// };