trigger OpportunityTrigger on Opportunity (after insert,
after update, 
after delete, 
after undelete)
 {
    if(Trigger.isAfter && Trigger.isInsert){
        OpportunityTriggerHandler.afterInsert(trigger.new);
    }
    if(Trigger.isAfter && Trigger.isUpdate){
        OpportunityTriggerHandler.afterUpdate(trigger.new,trigger.oldMap);
    }
    if(Trigger.isAfter && Trigger.isDelete){
        OpportunityTriggerHandler.afterDelete(trigger.old);
    }
    if(Trigger.isAfter && Trigger.isUndelete){
        OpportunityTriggerHandler.afterUndelete(trigger.new);

    }

}