public with sharing class opportunitySelector {
    public static List<AggregateResult> aggregateOpenOpportunities(Set<Id>oppIds) {
        List<AggregateResult> aggResult = [SEELCT COUNT(id) countOpenOpper, AccountId 
                                            FROM  Opportunity
                                            WHERE IsClosed = False 
                                            AND Id IN:oppIds
                                            GROUP BY Account.Name 
                                        ];
        return aggResult;

    }
}