import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArrowUpComponent } from "../../../shared/arrow-up/arrow-up.component";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ArrowUpComponent],
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

  nameFocus: boolean = false;
  emailFocus: boolean = false;
  messageFocus: boolean = false;

  nameFocusLabel: boolean = false;
  emailFocusLabel: boolean = false;
  messageFocusLabel: boolean = false;

  agbChecked: boolean = false;

  emailInvalid: boolean = false;
  emailInvalidText: string = 'Bitte gib eine gültige E-Mail-Adresse ein.';

  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.agbChecked = input.checked;
  }

  onBlurName(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      this.namePlaceholder = 'Bitte geben Sie Ihren Namen ein';
      input.classList.add('placeholder-error');
      this.nameError = true;
      this.nameFocusLabel = false;
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
    this.emailFocusLabel = false;
    this.emailInvalid = false;
  } else if (!input.checkValidity()) {
    this.emailPlaceholder = this.emailInvalidText; 
    input.classList.add('placeholder-error');
    this.emailError = false;
    this.emailInvalid = true;
    this.email = ''; 
  } else {
    input.classList.remove('placeholder-error');
    this.emailError = false;
    this.emailInvalid = false;
  }
}

  onBlurMessage(event: FocusEvent) {
    const input = event.target as HTMLTextAreaElement;
    if (!input.value) {
      this.messagePlaceholder = 'Bitte geben Sie Ihre Nachricht ein';
      input.classList.add('placeholder-error');
      this.messageError = true;
      this.messageFocusLabel = false;
    } else {
      input.classList.remove('placeholder-error');
      this.messageError = false;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
    console.log(this.name,this.email,this.message)
    this.resetForm();
  }

  focusName(event: FocusEvent) {
    this.nameFocus = true;
    this.nameFocusLabel = true;
  }

  focusEmail(event: FocusEvent) {
    this.emailFocus = true;
    this.emailFocusLabel = true;
  }

  focusMessage(event: FocusEvent) {
    this.messageFocus = true;
    this.messageFocusLabel = true;
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.agbChecked = false;
    this.nameError = false;
    this.emailError = false;
    this.messageError = false;
    this.nameFocus = false;
    this.emailFocus = false;
    this.messageFocus = false;
    this.nameFocusLabel = false;
    this.emailFocusLabel = false;
    this.messageFocusLabel = false;
}

scrollToSection() {
    const element = document.getElementById('ladingPage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
    }
  }
}
