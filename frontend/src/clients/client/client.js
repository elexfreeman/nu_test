export default class Client {

    constructor(client, providerList) {

        this.prepareProvider = this.prepareProvider.bind(this);

        /* i thinck providerList is array =) */
        this.providerList = [];
        if (providerList) {
            this.providerList = providerList;
        }

        if (client.id) {
            this.id = client.id;
        }
        if (client.name) {
            this.name = client.name;
        }
        if (client.email) {
            this.email = client.email;
        }
        if (client.phone) {
            this.phone = client.phone;
        }

        if (client.providers) {
            this.providers = client.providers;
            this.prepareProvider();
        }
    }

    prepareProvider() {
       
        this.providersString = '';

        let tmp = [];

        for (let k = 0; k < this.providers.length; k++) {
            for (let i = 0; i < this.providerList.length; i++) {
                if (this.providerList[i].id == this.providers[k].id) {
                    tmp.push(this.providerList[i].name);                    
                }
            } // i++

        } // k++          

        this.providersString = tmp.join(', ');
    }
}
