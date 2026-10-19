import { LightningElement, wire } from 'lwc';
import getTotalAppointments from '@salesforce/apex/DashboardController.getTotalAppointments';
import getTodayAppointments from '@salesforce/apex/DashboardController.getTodayAppointments';

export default class AppointmentDashboard extends LightningElement {

    totalAppointments;
    todayAppointments;

    @wire(getTotalAppointments)
    wiredTotal({ error, data }) {
        if (data) {
            this.totalAppointments = data;
        } else if (error) {
            console.error(error);
        }
    }

    @wire(getTodayAppointments)
    wiredToday({ error, data }) {
        if (data) {
            this.todayAppointments = data;
        } else if (error) {
            console.error(error);
        }
    }
}