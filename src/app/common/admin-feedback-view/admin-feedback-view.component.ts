import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-feedback-view',
  standalone: true,
  imports: [AdminSidebarComponent],
  templateUrl: './admin-feedback-view.component.html',
  styleUrl: './admin-feedback-view.component.css'
})
export class AdminFeedbackViewComponent {

}
