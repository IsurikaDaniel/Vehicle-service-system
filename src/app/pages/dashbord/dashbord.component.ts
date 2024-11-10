import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

interface SidebarOption {
  label: string;
  route: string;
  roles: string[]; // Roles that can access this option
}

interface Account { // Define the Account interface
  email: string;
  password: string;
  role: string;
  // Add any other properties as needed
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  public selectedRole: string = ''; // Stores the selected role from the backend
  public usersList: Account[] = []; // Array to hold users fetched from the backend
  public loginObj: any = {
    email: "",
    password: "",
    role: "" // Role will be set after login
  };
  public isChecked: boolean = false; // Boolean flag for checkbox state
  public isDisableButton: boolean = true; // Disable button flag

  constructor(private http: HttpClient, private router: Router) {}

  // Fetch all users from the backend (GET request)
  getAllUsers() {
    return this.http.get<Account[]>("http://localhost:8080/Account/get-all"); // Return the observable
  }

  // Handle login functionality - check users array and validate credentials
  login() {
    this.getAllUsers().subscribe((res: Account[]) => {
      this.usersList = res; // Assign the response to the instance property
      console.log(this.usersList);
       
      // Find a matching user in the users array
      const foundUser  = this.usersList.find(user => 
        user.email === this.loginObj.email && user.password === this.loginObj.password
      );

      if (foundUser ) {
        console.log('User  found:', foundUser );

        // Set the role after successful login
        this.loginObj.role = foundUser .role;
        this.selectedRole = foundUser .role; // Update the selected role

        // Show success message
        Swal.fire({
          title: 'Success',
          text: 'Login successful!',
          icon: 'success'
        });

        // Navigate to the appropriate dashboard based on the role
        if (this.selectedRole === 'Admin') {
          this.router.navigate(['/admin-appoinments-view']);
        } else if (this.selectedRole === 'Customer') {
          this.router.navigate(['/appoinment']);
        }
      } else {
        // If no matching user is found, show error
        Swal.fire({
          title: 'Error',
          text: 'Invalid email or password.',
          icon: 'error'
        });
      }
    }, error => {
      console.error('Error fetching users:', error);
      Swal.fire({
        title: "Error",
        text: `An error occurred while fetching users.`,
        icon: "error"
      });
    });
  }

  // Enable or disable login button based on input fields
  enableButton() {
    this.isDisableButton = !(this.loginObj.email && this.loginObj.password); // Enable button if email and password are filled
  }
}