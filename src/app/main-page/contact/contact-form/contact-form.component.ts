import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

  isSubmitting: boolean = false;
  name: string = '';
  email: string = '';
  message: string = '';

  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;


  namePlaceholder: string = 'Dein Name hier';
  emailPlaceholder: string = 'youremail@email.com';
  messagePlaceholder: string = 'Hallo Stephan, ich habe Interesse...';

  onBlurName(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      this.namePlaceholder = 'Bitte geben Sie Ihren Namen ein';
      input.classList.add('placeholder-error');
      this.nameError = true;
    } else {
      input.classList.remove('placeholder-error');
      this.nameError = false;
    }
  }

  onBlurEmail(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      this.emailPlaceholder = 'Bitte geben Sie Ihre Email ein';
      input.classList.add('placeholder-error');
      this.emailError = true;
    } else {
      input.classList.remove('placeholder-error');
      this.emailError = false;
    }
  }

  onBlurMessage(event: FocusEvent) {
    const input = event.target as HTMLTextAreaElement;
    if (!input.value) {
      this.messagePlaceholder = 'Bitte geben Sie Ihre Nachricht ein';
      input.classList.add('placeholder-error');
      this.messageError = true;
    } else {
      input.classList.remove('placeholder-error');
      this.messageError = false;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
  }

  test() {
    console.log('hallod')
  }
}
