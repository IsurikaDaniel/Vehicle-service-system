import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';
import { ServiceComponent } from './pages/service/service.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AdminAccontsViewComponent } from './common/admin-acconts-view/admin-acconts-view.component';
import { AdminAppointmentsViewComponent } from './common/admin-appointments-view/admin-appointments-view.component';
import Aos from 'aos';
import { AdminFeedbackViewComponent } from './common/admin-feedback-view/admin-feedback-view.component';
import { AdminDasbordComponent } from './common/admin-dasbord/admin-dasbord.component';
import { AdminSidebarComponent } from './common/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashbordComponent, NavBarComponent, AppointmentComponent, CustomerAccountComponent, ServiceComponent, FeedbackComponent, AdminAccontsViewComponent, AdminAppointmentsViewComponent, AdminFeedbackViewComponent, AdminDasbordComponent, AdminSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Vehicle-service';

  // ngOnInit() {
  //   Aos.init();
  // }
  ngOnInit() {
    Aos.init({
      duration: 800, // Adjust the animation duration in milliseconds
      easing: 'ease-in-out', // Set the easing style
      once: true, // Animation will only happen once while scrolling down
      mirror: false // No animation while scrolling past elements
    });
  }

}
