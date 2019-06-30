export default class Client {

    constructor(client, providerList) {

        this.prepareProvider = this.prepareProvider.bind(this);
        this.get = this.get.bind(this);

        this.id = null;
        this.name = '';
        this.email = '';
        this.phone = '';
        this.providers = [];
        this.providersString = '';

        /* i thinck providerList is array =) */
        this.providerList = [];

        /* data for provider editor check list */
        this.providerEditorListData = [];


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

    /**
     * Create provider string like 'Provider 1, Provider 2'
     */
    prepareProvider() {

        this.providersString = '';
        this.providerEditorListData = [];

        let tmp = [];

        /* fast cycle, not lodash  */

        for (let i = 0; i < this.providerList.length; i++) {
            let check = false;
            for (let k = 0; k < this.providers.length; k++) {

                if (this.providerList[i].id == this.providers[k].id) {
                    tmp.push(this.providerList[i].name);
                    check = true;
                }

            } // k++        

            /* for provider_Editor component */
            this.providerEditorListData.push({
                id: this.providerList[i].id,
                name: this.providerList[i].name,
                check: check
            });

        }   // i++ 

        this.providersString = tmp.join(', ');
    }

    /**
     * get only client data (for ajax)
     */
    get() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            providers: this.providers
        }
    }
}
