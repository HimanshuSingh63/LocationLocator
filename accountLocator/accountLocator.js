// accountLocatorController.js
import { LightningElement, track } from 'lwc';

export default class AccountLocator extends LightningElement {
    @track accounts;

    handleSearch(event) {
        this.accounts = event.detail;

    }
    
}
