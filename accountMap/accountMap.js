// accountMap.js
import { LightningElement, api, track } from 'lwc';

export default class AccountMap extends LightningElement {
    @track mapMarkers = [];
    _accounts;

    connectedCallback() {
        this.loadMapMarkers();
    }

    loadMapMarkers() {
        if (this._accounts && this._accounts.length > 0) {
            console.log('accccc'+this._accounts);
            this.mapMarkers = this._accounts.map(account => {
                return {
                    location: {
                        Street: account.ShippingStreet,
                        City: account.ShippingCity,
                        PostalCode: account.ShippingPostalCode
                    },
                    title: account.Name,
                    description: `Phone: ${account.Phone}`,
                    icon: 'standard:location'
                };
            });
        }
    }

    @api
    get accounts() {
        return this._accounts;
    }

    set accounts(value) {
        this._accounts = value;
        this.loadMapMarkers();
    }

}
