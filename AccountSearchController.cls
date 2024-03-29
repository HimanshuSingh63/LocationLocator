public with sharing class AccountSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String searchValue) {
        List<Account> accounts = new List<Account>();
        if (String.isNotBlank(searchValue)) {
            String searchQuery = searchValue + '%';
            accounts = [SELECT Id, Name,Type,Phone,ShippingStreet,ShippingCity,ShippingState,ShippingPostalCode FROM Account WHERE Name LIKE :searchQuery ORDER BY Name ASC];
        }
        System.debug('Accounts: ' + accounts);
        return accounts;
    }
}