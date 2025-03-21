import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
onSubmit($event: SubmitEvent) {
throw new Error('Method not implemented.');
}

}
