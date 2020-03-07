public with sharing class WashroomController {
    @AuraEnabled(Cacheable=true)
    public static Washrooms__c[] getAllWashrooms() {
        return [SELECT Name, Category__c, Address__c FROM Washrooms__c];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Washrooms__c> getAllWashroomsList() {
        return [SELECT Name, Category__c, Address__c FROM Washrooms__c];
    }
}