import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  public Appointment:any={
    name:"",
    vehicleType:"",
    number:"",
    email:"",
    date:"",
    location:"",
    service:""
  };

  constructor(private http:HttpClient){}

  public addAppointment(){
    this.http.post("http://localhost:8080/Appointment/add-appointment",this.Appointment).subscribe((data)=>{
        alert("Appointment Added!!!!");
    })
  }

}
