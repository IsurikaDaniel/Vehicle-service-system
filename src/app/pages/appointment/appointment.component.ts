import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ConactbarComponent } from '../../common/contactbar/conactbar.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule,HttpClientModule,ConactbarComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  public appointment:any={
    name:"",
    vehicleType:"",
    number:"",
    email:"",
    date:"",
    location:"",
    service:"",
    paymentOption: "Card Payments"
  };

  constructor(private http:HttpClient){}


  public addAppointment() {
    console.log("Sending appointment data:", this.appointment);
    this.http.post("http://localhost:8080/Appointment/add-appointment", this.appointment).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status === "200") {
          Swal.fire({
            title: "success",
            text: `Appointment Added!`,
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "error",
            text: `Can't add Appointment `,
            icon: "error"
          });
        }
      },
      (error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: `Could not connect to the server. Please try again later.`,
          icon: "error"
        });
      }
    );
  }
  

}
