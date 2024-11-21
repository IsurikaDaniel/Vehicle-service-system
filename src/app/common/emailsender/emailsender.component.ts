import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import Swal from 'sweetalert2';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emailsender',
  standalone: true,
  imports: [AdminSidebarComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './emailsender.component.html',
  styleUrls: ['./emailsender.component.css'] // Fixed typo: 'styleUrl' to 'styleUrls'
})
export class EmailsenderComponent {
  public emailSender: any = {
    recipient: "",
    subject: "",
    message: ""
  };

  constructor(private http: HttpClient) {}

  public sendEmail(form: any) {
    if (form.invalid) {
      Swal.fire({
        title: "Error",
        text: "Please fill all required fields.",
        icon: "error"
      });
      return;
    }

    console.log("Sending email data:", this.emailSender);

    this.http.post("http://localhost:8080/sendEmail", this.emailSender).subscribe(
      (res: any) => {
        // Ensure server response is checked correctly
        if (res && res.status === "200") {
          console.log("Response from server:", res);
          Swal.fire({
            title: "Success",
            text: "Email sent successfully!",
            icon: "success"
          });
        } else {
          console.error("Unexpected response from server:", res);
          Swal.fire({
            title: "Error",
            text: res.message || "The email could not be sent. Please try again.",
            icon: "error"
          });
        }
      },
      (error: any) => {
        // Handle HTTP or network errors
        console.error("Error from server:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while sending the email. Please try again later.",
          icon: "error"
        });
      }
    );
  }
}
