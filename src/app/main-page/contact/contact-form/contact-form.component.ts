import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArrowUpComponent } from "../../../shared/arrow-up/arrow-up.component";
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ArrowUpComponent, TranslateModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

  http = inject(HttpClient);

  isSubmitting: boolean = false;
  name: string = '';
  email: string = '';
  message: string = '';

  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;
  emailInvalid: boolean = false;
  agbChecked: boolean = false;
  privacyPolicyInteracted: boolean = false;

  nameFocus: boolean = false;
  emailFocus: boolean = false;
  messageFocus: boolean = false;

  nameFocusLabel: boolean = false;
  emailFocusLabel: boolean = false;
  messageFocusLabel: boolean = false;





  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.agbChecked = input.checked;

    if (this.agbChecked) {
      this.privacyPolicyInteracted = true;
    }
  }

  onBlurName(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    this.nameError = !input.value;

    if (this.nameError) {
      input.classList.add('placeholder-error');
    } else {
      input.classList.remove('placeholder-error');
    }
  }

  onBlurEmail(event: FocusEvent) {
    const input = event.target as HTMLInputElement;

    this.emailError = false;
    this.emailInvalid = false;
    input.classList.remove('placeholder-error');

    if (!input.value) {
      this.emailError = true;
      input.classList.add('placeholder-error');

    } else if (!input.checkValidity()) {
      this.emailInvalid = true;
      this.email = '';
      input.classList.add('placeholder-error');

    }
  }

  onBlurMessage(event: FocusEvent) {
    const input = event.target as HTMLTextAreaElement;
    this.messageError = !input.value;

    if (this.messageError) {
      input.classList.add('placeholder-error');
    } else {
      input.classList.remove('placeholder-error');
    }
  }


  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
    console.log(this.name, this.email, this.message)
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
    this.agbChecked = false;
    this.privacyPolicyInteracted = false;
  }

  scrollToSection() {
    const element = document.getElementById('ladingPage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
  }
}
