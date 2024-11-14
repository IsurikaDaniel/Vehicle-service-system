import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import Swal from 'sweetalert2';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-account',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent {

  public SelectAccount = 'Account';

  public changeSelectAccount(menuName:string){
    this.SelectAccount = menuName;
  }

  public customerAcount:any={
    name:"",
    contact:"",
    email:"",
    address:"",
    vehicleType:"",
    vehicleNumber:""
  };

  constructor(private http:HttpClient){}


  public addcustomerAcount() {
    console.log("Sending customeracount data:", this.customerAcount);
    this.http.post("http://localhost:8080/CustomerAcc/add-CustomerAcc", this.customerAcount).subscribe(
      (res: any) => {
        console.log(res);
        if (res === true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "customer Added!",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            title: "success",
            text: `customer Added!`,
            icon: "success"
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
