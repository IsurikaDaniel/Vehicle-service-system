import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import Swal from 'sweetalert2';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConactbarComponent } from '../contactbar/conactbar.component';
import { ConactsidebarComponent } from '../contactsidebar/conactsidebar.component';

declare var bootstrap: any;
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
  selector: 'app-admin-dasbord',
  standalone: true,
  imports: [AdminSidebarComponent,HttpClientModule,FormsModule,CommonModule,RouterLink,ConactbarComponent,ConactsidebarComponent],
  templateUrl: './admin-dasbord.component.html',
  styleUrl: './admin-dasbord.component.css'
})
export class AdminDasbordComponent {
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
  login(pagename:String):void {
    this.getAllUsers().subscribe((res: Account[]) => {
      this.usersList = res; // Assign the response to the instance property
      console.log('Fetched users:', this.usersList);
      
      // Find a matching user in the users array
      const foundUser   = this.usersList.find(user => 
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
        }).then(() => {
          // Close the modal and navigate to the appropriate dashboard based on the role
          this.closeModal();

          if (this.selectedRole === 'Admin') {
            this.router.navigate(['/Dash']);
          } else if (this.selectedRole === 'Customer') {
            this.router.navigate(['/Customer_Account']);
          }
        });
      } else {
        // If no matching user is found, show error
        Swal.fire({
          title: 'Error',
          text: 'Invalid email or password.',
          icon: 'error'
        });
      }
    }, (error: any) => {
      console.error('Error fetching users:', error);
      Swal.fire({
        title: "Error",
        text: `An error occurred while fetching users.`,
        icon: "error"
      });
    });
  }

  // Method to close the modal
  closeModal() {
    const modalElement = document.getElementById('loginModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide(); // Hide the modal
      }
    }
  }

  // Enable or disable login button based on input fields
  enableButton() {
    this.isDisableButton = !(this.loginObj.email && this.loginObj.password); // Enable button if email and password are filled
  }
}
