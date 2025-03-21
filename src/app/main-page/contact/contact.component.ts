import { Component } from '@angular/core';
import { CircleComponent } from "./circle/circle.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CircleComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
