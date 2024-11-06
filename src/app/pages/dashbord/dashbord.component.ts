import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {
  public isChacked:Boolean=false;
  public isDesableButton:Boolean=true;
  loginObj:any={
    "email":"",
    "password":""
  }
  constructor(private http:HttpClient,private router:Router){}



  login(){
    this.http.post("http://localhost:8080/Account/login",this.loginObj).subscribe((res:any)=>{
      console.log(res);
      if(res===true){
        this.router.navigate(['/AppointmentComponent']);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Hello !",
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          title: "Can't access this user",
          text: `please chack your user name and password !`,
          icon: "error"
        });
      }
    })
  }

  anableButton(){
    this.isDesableButton=this.isChacked?true:false;
  }


}
