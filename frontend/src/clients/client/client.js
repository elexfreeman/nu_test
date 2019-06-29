export default class Client {

    constructor(client, providerList) {

        this.id = null;
        this.name = '';
        this.email = '';
        this.phone = '';
        this.providers = [];
        this.providersString = '';

         /* i thinck providerList is array =) */
         this.providerList = [];

        this.prepareProvider = this.prepareProvider.bind(this);

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

        let tmp = [];

        /* fast cycle, not lodash  */
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
