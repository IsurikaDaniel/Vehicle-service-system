import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-appointments-view',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,AdminSidebarComponent],
  templateUrl: './admin-appointments-view.component.html',
  styleUrl: './admin-appointments-view.component.css'
})
export class AdminAppointmentsViewComponent {

  public appointmentList:any = [];
  // public searchByService: string = '';

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

    // Search appointments by Patient ID
    // searchAppointmentsByService(): void {
    //   if (this.searchByService.trim() === '') {
    //     alert('Please enter a valid Patient ID.');
    //     return;
    //   }
  
    //   const apiUrl = `http://localhost:8080/appointment/search-by-patientId/${this.searchByService}`;
  
    //   this.http.get(apiUrl).subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       this.appointmentList = Array.isArray(data) ? data : [data]; // Ensure data is an array
    //     },
    //     (error) => {
    //       console.error('Error searching appointments:', error);
    //       alert('No appointments found for the given Patient ID.');
    //     }
    //   );
    // }
}
