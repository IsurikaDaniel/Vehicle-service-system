import { Routes } from '@angular/router';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ServiceComponent } from './pages/service/service.component';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AdminAccontsViewComponent } from './pages/admin-acconts-view/admin-acconts-view.component';
import { AdminAppointmentsViewComponent } from './pages/admin-appointments-view/admin-appointments-view.component';
import { AdminFeedbackViewComponent } from './pages/admin-feedback-view/admin-feedback-view.component';

export const routes: Routes = [
    {
        path:"",
        component:DashbordComponent
    },
    {
        path:"Customer_Account",
        component:CustomerAccountComponent
    },
    {
        path:"Service",
        component:ServiceComponent
    },
    {
        path:"Appointment",
        component:AppointmentComponent
    },
    {
        path:"Feedback",
        component:FeedbackComponent
    },
    {
        path:"AdminAppointment",
        component:AdminAppointmentsViewComponent
    },
    {
        path:"AdminAcc",
        component:AdminAccontsViewComponent
    },
    {
        path:"AdminFeedback",
        component:AdminFeedbackViewComponent
    }
    

];
