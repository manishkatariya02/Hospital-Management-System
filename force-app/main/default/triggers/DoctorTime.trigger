

trigger DoctorTime on Appointment__c (before insert, before update) {

    for(Appointment__c newAppt : Trigger.new) {
        
        // Skip if any required field is missing
        if(newAppt.Doctor__c == null || 
           newAppt.AppointmentDate__c == null || 
           newAppt.Time__c == null) {
            continue;
        }

        // Query existing appointments
        List<Appointment__c> existingAppts = [
            SELECT Id 
            FROM Appointment__c
            WHERE Doctor__c = :newAppt.Doctor__c
            AND AppointmentDate__c = :newAppt.AppointmentDate__c
            AND Time__c = :newAppt.Time__c
        ];

        for(Appointment__c ap : existingAppts){
            // Avoid comparing same record during update
            if(ap.Id != newAppt.Id){
                newAppt.addError('Doctor is already booked for this time slot.');
            }
        }
    }
}