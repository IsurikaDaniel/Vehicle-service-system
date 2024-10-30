import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { LoginComponent } from './pages/login/login.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';
import { VehicleAccountComponent } from './pages/vehicle-account/vehicle-account.component';
import { ServiceComponent } from './pages/service/service.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { RuleAndRegulationsComponent } from './pages/rule-and-regulations/rule-and-regulations.component';
import { SinginComponent } from './pages/singin/singin.component';
import { AdminAccontsViewComponent } from './pages/admin-acconts-view/admin-acconts-view.component';
import { AdminAppointmentsViewComponent } from './pages/admin-appointments-view/admin-appointments-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,AppointmentComponent,LoginComponent,DashbordComponent,CustomerAccountComponent,VehicleAccountComponent,ServiceComponent,FeedbackComponent,RuleAndRegulationsComponent,SinginComponent,AdminAccontsViewComponent,AdminAppointmentsViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vehicle-service';
}
