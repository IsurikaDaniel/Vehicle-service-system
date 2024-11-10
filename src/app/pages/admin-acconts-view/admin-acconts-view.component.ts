import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-acconts-view',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './admin-acconts-view.component.html',
  styleUrl: './admin-acconts-view.component.css'
})
export class AdminAccontsViewComponent {

}
