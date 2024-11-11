import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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

  public accountList:any = [];

  constructor(private http:HttpClient){
     this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8080/CustomerAcc/get-all").subscribe(data=>{
      console.log(data);
      this.accountList=data;
      
    })
  }

  deleteAppointmentById(id:any){
    console.log(id);

    this.http.delete(`http://localhost:8080/CustomerAcc/delete-by-id/${id}`).subscribe(data=>{
      alert("Appointment deleted !!!!");
      this.loadTable();
    })
    
}

public accountTemp:any={}
  updateAppointment(account:any){
    console.log(account);
    this.accountTemp=account;
    
  }
  saveAppointment(){
    this.http.put("http://localhost:8080/CustomerAcc/update-account",this.accountTemp).subscribe(data=>{
      alert("Account Updated!!!!!")
    })
  }
}
