import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-dasbord',
  standalone: true,
  imports: [AdminSidebarComponent],
  templateUrl: './admin-dasbord.component.html',
  styleUrl: './admin-dasbord.component.css'
})
export class AdminDasbordComponent {

}
