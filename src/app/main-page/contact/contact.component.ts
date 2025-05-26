import { Component } from '@angular/core';
import { CircleComponent } from "./circle/circle.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CircleComponent, ContactFormComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
