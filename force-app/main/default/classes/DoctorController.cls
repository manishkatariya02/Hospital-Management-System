
public with sharing class DoctorController {

    @AuraEnabled(cacheable=true)
    public static List<Doctor__c> getDoctors(){
        return [
            SELECT Id, Name, Specialization__c, Mo_Number__c, Experience__c
            FROM Doctor__c
        ];
    }
}