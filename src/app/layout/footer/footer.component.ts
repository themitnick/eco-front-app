import { Component } from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'ivb-footer',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
