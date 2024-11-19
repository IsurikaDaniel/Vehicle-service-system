import { Component } from '@angular/core';
import { AdminDasbordComponent } from '../admin-dasbord/admin-dasbord.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-emailsender',
  standalone: true,
  imports: [AdminSidebarComponent],
  templateUrl: './emailsender.component.html',
  styleUrl: './emailsender.component.css'
})
export class EmailsenderComponent {

}
