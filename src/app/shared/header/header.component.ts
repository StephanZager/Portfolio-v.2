import { Component } from '@angular/core';
import { IconBarComponent } from "../icon-bar/icon-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
