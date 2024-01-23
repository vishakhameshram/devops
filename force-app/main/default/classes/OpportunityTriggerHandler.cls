public with sharing class OpportunityTriggerHandler {
    public  static void afterInsert(List<Opportunity>newOpps) {
        set<Id> oppIds = new Set<Id>();
        for(Opportunity opp : newOpps){
            if(opp.AccountId!=null){
                oppIds.add(opp.AccountID);

            } 
        List<Account> listAccountToUpdate =new List<Account>();
        for( AggregateResult ar :[SELECT COUNT(Id) countOpenOpper, AccountId 
                                    FROM  Opportunity
                                     
                                    where Id IN:oppIds 
                                    GROUP BY AccountId] )
            {
                    Account accountToUpdate =new Account();
                    accountToUpdate.ID = (Id) ar.get('AccountId');
                    accountToUpdate.number_of_open_opp__c = (decimal) ar.get('countOpenOpper');
                    listAccountToUpdate.add(accountToUpdate);
            }
            
                Update listAccountToUpdate;

         

        }
    }
    public  static void afterUpdate(List<Opportunity>newOpps, Map<Id,Opportunity> oldMap) {

    }
    public  static void afterDelete(List<Opportunity> oldOpps) {

    }
    public  static void afterUndelete(List<Opportunity>newOpps) {

    }

}