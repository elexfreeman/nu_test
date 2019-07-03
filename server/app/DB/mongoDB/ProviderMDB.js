import BaseMDB from './BaseMDB';

import ProviderModel from './models/ProviderModel';

export default class ProviderMDB extends BaseMDB {

    constructor() {
        super();
    }

    list(offset, limit, search) {
        return new Promise((resolve, reject) => {
            try {
                ProviderModel.find({}).exec((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            } catch (e) {
                reject(e);
            }
        })
    }

    get(providerId) {
        return new Promise((resolve, reject) => {
            try {
                ProviderModel.findOne({ _id: providerId }).exec((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            } catch (e) {
                reject(e);
            }
        })
    }

    /**
     * add provider to db
     * @param {*} provider 
     */
    add(data) {
        return new Promise((resolve, reject) => {
            try {
                let provider = new ProviderModel(data);

                provider.save(err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(provider._id);
                    }
                });
            } catch (e) {
                reject(e);
            }

        });
    }


    /**
     * update provider data
     * requre provider.id
     * @param {*} provider 
     */
    update(provider) {
        return new Promise((resolve, reject) => {
            let updateData = {};
            let providerId;
            try {
                if (!provider) {
                    throw 'empty provider';
                }

                if (!provider.id) {
                    throw 'empty id';
                }

                providerId = provider.id

                if (provider.name) {
                    updateData['name'] = provider.name;
                }

                ProviderModel.findByIdAndUpdate(providerId,
                    { $set: updateData },
                    { new: true }, (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(true)
                        }

                    });

            } catch (e) {
                console.log(e);
                reject(err);
            }
        });

    }

    /**
     * Delete provider from DB
     * @param {number} providerId 
     */
    remove(providerId) {
        return new Promise((resolve, reject) => {
            try {
                ProviderModel.remove({ _id: providerId }, function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(true);
                    }
                });
            } catch (e) {
                reject(err);
            }
        });
    }

}