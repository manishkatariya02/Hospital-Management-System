

public with sharing class AppointmentController {

    @AuraEnabled
    public static void createAppointment(Id patientId, Id doctorId, Date date1, time timeSlot) {

        Appointment__c appt = new Appointment__c(
            Patient__c = patientId,
            Doctor__c = doctorId,
            AppointmentDate__c = date1,
            Time__c = timeSlot
        );

        insert appt;
    }
}