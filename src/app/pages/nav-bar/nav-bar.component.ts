import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public SelectNavBar = 'Home';

  public changeSelectNavBar(menuName:string){
    this.SelectNavBar = menuName;
  }

  @Input() role: string | null = null; // Receives the user role from the parent component

}
