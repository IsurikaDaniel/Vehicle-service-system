import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import Swal from 'sweetalert2';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConactbarComponent } from '../../common/contactbar/conactbar.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule,HttpClientModule,ConactbarComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  public Feedback:any={
    description:"",
    customerName:""
  };

  constructor(private http:HttpClient){}


  public addFeedback() {
    console.log("Sending appointment data:", this.Feedback);
    this.http.post("http://localhost:8080/FeedBack/add-feedBack", this.Feedback).subscribe(
      (res: any) => {
        console.log(res);
        if (res === true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "FeedBack Added!",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            title: "success",
            text: `FeedBack Added!`,
            icon: "success"
          });
        }
      },
      (error: any) => {
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
