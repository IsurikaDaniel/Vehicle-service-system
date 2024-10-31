import { Routes } from '@angular/router';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ServiceComponent } from './pages/service/service.component';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { RuleAndRegulationsComponent } from './pages/rule-and-regulations/rule-and-regulations.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

export const routes: Routes = [
    {
        path:"Home",
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
        path:"Ruls",
        component:RuleAndRegulationsComponent
    }

];
