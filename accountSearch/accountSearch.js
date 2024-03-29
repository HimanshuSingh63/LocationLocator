// accountSearchController.js
import { LightningElement, track } from 'lwc';
import searchAccounts from '@salesforce/apex/AccountSearchController.searchAccounts';

export default class AccountSearch extends LightningElement {
    @track searchValue = '';

    handleSearchChange(event) {
        this.searchValue = event.target.value;
        this.searchAccounts();
    }

    searchAccounts() {
        try {
            searchAccounts({ searchValue: this.searchValue })
                .then(result => {
                    console.log('Search Results: ', JSON.stringify(result)); // Debugging line
                    this.accounts = result;
                    const searchEvent = new CustomEvent('search', { detail: this.accounts });
                    this.dispatchEvent(searchEvent);
                })
                .catch(error => {
                    console.error('Error in AccountSearch: ' + error.message);
                });
        } catch (err) {
            console.error('Error in AccountSearch: ' + err.message);
        }
    }
}
