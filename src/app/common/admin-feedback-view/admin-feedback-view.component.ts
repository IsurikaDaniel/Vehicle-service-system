import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-feedback-view',
  standalone: true,
  imports: [AdminSidebarComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './admin-feedback-view.component.html',
  styleUrl: './admin-feedback-view.component.css'
})
export class AdminFeedbackViewComponent {

  public FeedBackList:any = [];

  constructor(private http:HttpClient){
     this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8080/FeedBack/get-all").subscribe(data=>{
      console.log(data);
      this.FeedBackList=data;
      
    })
  }

  deleteFeedbackById(id:any){
    console.log(id);

    this.http.delete(`http://localhost:8080/FeedBack/delete-by-id/${id}`).subscribe(data=>{
      alert("Feedback deleted !!!!");
      this.loadTable();
    })
    
}

public FeedbackTemp:any={}
  updateFeedback(Feedback:any){
    console.log(Feedback);
    this.FeedbackTemp=Feedback;
    
  }
  saveUpdateFeedback(){
    this.http.put("http://localhost:8080/FeedBack/update-feedBack",this.FeedbackTemp).subscribe(data=>{
      alert("Feedback Updated!!!!!")
    })
  }
}
