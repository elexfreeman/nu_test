import BaseMDB from './BaseMDB';

import ClientModel from './models/ClientModel';

export default class ClientMDB extends BaseMDB {

    constructor() {
        super();
    }

    list(offset, limit, search) {
        return new Promise((resolve, reject) => {
            try {
                ClientModel.find({}).exec((err, data) => {
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

    get(clientId) {
        return new Promise((resolve, reject) => {
            try {
                ClientModel.findOne({ _id: clientId }).exec((err, data) => {
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
     * add client to db
     * @param {*} client 
     */
    add(data) {
        return new Promise((resolve, reject) => {
            try {
                let client = new ClientModel(data);

                client.save(err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(client._id);
                    }
                });
            } catch (e) {
                reject(e);
            }

        });
    }


    /**
     * update client data
     * requre client.id
     * @param {*} client 
     */
    update(client) {
        return new Promise((resolve, reject) => {
            let updateData = {};
            let clientId;
            try {
                if (!client) {
                    throw 'empty client';
                }

                if (!client.id) {
                    throw 'empty id';
                }

                clientId = client.id

                if (client.name) {
                    updateData['name'] = client.name;
                }

                if (client.email) {
                    updateData['email'] = client.email;
                }

                if (client.phone) {
                    updateData['phone'] = client.phone;
                }

                if (client.providers) {
                    updateData['providers'] = client.providers;
                }

                ClientModel.findByIdAndUpdate(clientId,
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
     * Delete client from DB
     * @param {number} clientId 
     */
    remove(clientId) {
        return new Promise((resolve, reject) => {
            try {
                ClientModel.remove({ _id: clientId }, function (err) {
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