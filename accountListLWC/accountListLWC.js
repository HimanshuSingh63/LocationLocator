// accountList.js
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountListLWC extends NavigationMixin(LightningElement) {
    @api accounts;

    columns = [
        { label: 'Account Name', fieldName: 'Name' },
        { label: 'Type', fieldName:'Type'},
        { label: 'Phone', fieldName:'Phone'},
        {
            label: 'Action',
            type: 'button',
            initialWidth: 135,
            typeAttributes: {
                label: 'View details',
                name: 'view_details',
                title: 'Click to View Details',
                disabled: false,
                value: 'view',
                variant: 'base',
            },
        }
    ];

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'view_details':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId: row.Id,
                        objectApiName:'Account',
                        actionName:'view'
                    }
                })
                break;
            default:
        }
    }
}
