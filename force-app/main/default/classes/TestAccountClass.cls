public with sharing class TestAccountClass {
    @AuraEnabled(cacheable=true)
    
    public static List<Account> getAccount() { 
                  
               return [SELECT Name,Type,Website, phone FROM Account WITH SECURITY_ENFORCED limit 10 ];    
    }

    @AuraEnabled
    // here accountdata parameter will recieve data in the form of obj
    public static string methodNaupdateDetails(object accountData){
        system.debug('accountdata:'+accountData);
        // because apex dont know that which object data is coming thats why we are using 
        // casting and deserialization 
        List<Account> accountList = (List<Account>) JSON.deserialize(JSON.serialize(accountData),List<Account>.class);
        system.debug('accountList :'+accountList);
        if(!accountList.isEmpty())
        {
            UPDATE accountList;
            return 'success';
        }
        return 'failed';
    }   
}