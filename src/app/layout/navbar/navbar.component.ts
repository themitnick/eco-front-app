import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'ivb-navbar',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
