public with sharing class ContactController {
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContacts(){
        try {
            return [select Id ,name ,Title ,email from Contact  WITH SECURITY_ENFORCED ];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactsList() {
        return [select Id ,name ,Title ,email from Contact  WITH SECURITY_ENFORCED];

    }

    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactsListDynamically(integer numberOfRecords) {
        List<Contact> contacts;
        
            contacts = [SELECT Id, LastName, Phone FROM Contact  WITH SECURITY_ENFORCED LIMIT :numberOfRecords];
        
        return contacts;
    }

    @AuraEnabled(cacheable= true)
    public static List<Contact> getRelatedContact(Id accrecordId,string searchValue) {
        
        if(searchValue!='' && searchValue!=null){
            string key = '%'+ searchValue +'%';
            List<Contact> conList =  [SELECT Id ,Name ,Phone, AccountId 
                        FROM Contact  WHERE AccountId =:accrecordId AND Name like:key  
                        WITH SECURITY_ENFORCED];

                
                    return conList;

              
            
        }
        else{
            List<Contact> conList =  [SELECT Id ,Name ,Phone, AccountId 
            FROM Contact  WHERE AccountId =:accrecordId 
            WITH SECURITY_ENFORCED];
            return conList;

        }
       

      
    }
 
    
}