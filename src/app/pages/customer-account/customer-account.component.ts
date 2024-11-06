import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-account',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent {

  public SelectAccount = 'Account';

  public changeSelectAccount(menuName:string){
    this.SelectAccount = menuName;
  }
}
