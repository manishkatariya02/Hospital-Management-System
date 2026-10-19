

public with sharing class DashboardController {

    @AuraEnabled(cacheable=true)
    public static Integer getTotalAppointments(){
        return [SELECT COUNT() FROM Appointment__c];
    }

    @AuraEnabled(cacheable=true)
    public static Integer getTodayAppointments(){
        return [SELECT COUNT() FROM Appointment__c WHERE AppointmentDate__c = TODAY];
    }
}