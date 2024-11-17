import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ConactbarComponent } from '../../common/contactbar/conactbar.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NavBarComponent,ConactbarComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
