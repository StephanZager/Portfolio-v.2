import { Component } from '@angular/core';
import { CircleComponent } from "./circle/circle.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ArrowUpComponent } from "../../shared/arrow-up/arrow-up.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CircleComponent, ContactFormComponent, FooterComponent, ArrowUpComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  scrollToSection() {
    const element = document.getElementById('ladingPage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
    }
  }
}
