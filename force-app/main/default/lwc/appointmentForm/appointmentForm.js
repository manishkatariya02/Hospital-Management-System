import { LightningElement, track } from 'lwc';
import createAppointment from '@salesforce/apex/AppointmentController.createAppointment';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AppointmentForm extends LightningElement {

    @track patientId;
    @track doctorId;
    @track date;
    @track timeSlot;

 

    handlePatient(event) {
        this.patientId = event.target.value;
    }

    handleDoctor(event) {
        this.doctorId = event.target.value;
    }

    handleDate(event) {
        this.date = event.target.value;
    }

    handleTime(event) {
        this.timeSlot = event.target.value;
    }

    createAppointment() {
        createAppointment({
            patientId: this.patientId,
            doctorId: this.doctorId,
            date: this.date,
            timeSlot: this.timeSlot
        })
        .then(() => {
            this.showToast('Success', 'Appointment Booked', 'success');
        })
        .catch(error => {
            this.showToast('Error', error.body.message, 'error');
        });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({ title, message, variant })
        );
    }
}