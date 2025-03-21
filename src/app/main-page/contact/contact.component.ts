import { Component } from '@angular/core';
import { CircleComponent } from "./circle/circle.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CircleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
