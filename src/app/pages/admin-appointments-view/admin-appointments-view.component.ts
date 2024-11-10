import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-appointments-view',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './admin-appointments-view.component.html',
  styleUrl: './admin-appointments-view.component.css'
})
export class AdminAppointmentsViewComponent {

  public appointmentList:any = [];

  constructor(private http:HttpClient){
     this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8080/Appointment/get-all").subscribe(data=>{
      console.log(data);
      this.appointmentList=data;
      
    })
  }

  deleteAppointmentById(id:any){
    console.log(id);

    this.http.delete(`http://localhost:8080/Appointment/delete-by-id/${id}`).subscribe(data=>{
      alert("Appointment deleted !!!!");
      this.loadTable();
    })
    
}

public appointmentTemp:any={}
  updateAppointment(appointment:any){
    console.log(appointment);
    this.appointmentTemp=appointment;
    
  }

  saveAppointment(){
    this.http.put("http://localhost:8080/Appointment/update-appointment",this.appointmentTemp).subscribe(data=>{
      alert("Appointment Updated!!!!!")
    })
  }
}
