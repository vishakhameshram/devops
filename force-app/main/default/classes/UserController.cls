public with sharing class UserController {
    @AuraEnabled(cacheable= true)
    public static List<user> getUserName(string searchKey){
    
        string searchKeyword = '%' + searchKey + '%';
         return [SELECT Id, Name  from User where Name LIKE :searchKeyword  WITH SECURITY_ENFORCED ] ;

    }

}

		

 