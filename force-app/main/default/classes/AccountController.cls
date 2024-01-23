public with sharing class AccountController {
@AuraEnabled
public  static List<Account> getAccountsFiltered(string searchKey) {
    String  key = '%'+ searchKey +'%';
 return [SELECT Id, Name , Industry,Type FROM Account WHERE Name Like:key  WITH SECURITY_ENFORCED LIMIT 5 ];
    
}
@AuraEnabled
public  static void justToCheckDemo() {
    system.debug('See its working');
    
}
   
}