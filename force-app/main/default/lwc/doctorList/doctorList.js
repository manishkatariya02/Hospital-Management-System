import { LightningElement, wire } from 'lwc';
import getDoctors from '@salesforce/apex/DoctorController.getDoctors';

export default class DoctorList extends LightningElement {

    doctors;
    error;

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Specialization', fieldName: 'Specialization__c' },
        { label: 'Phone', fieldName: 'Phone__c' },
        { label: 'Experience (Years)', fieldName: 'Experience__c', type: 'number' }
    ];

    @wire(getDoctors)
    wiredDoctors({ error, data }) {
        if (data) {
            this.doctors = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.doctors = undefined;
        }
    }
}