import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  contactData = {
    name: "",
    email: "",
    message: "",
  }

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

  mailTest = false;
  isEmailSendVisible = false;

  post = {
    endPoint: 'https://stephan-zager.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };



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
      this.contactData.email = '';
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


  onSubmit(ngForm: NgForm) {

    if (ngForm.submitted && ngForm.form.valid && this.agbChecked) {
      this.isSubmitting = true;


      if (!this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              this.emailSendPopUp()
              this.resetAll(ngForm);
            },
            error: (error) => {
              this.isSubmitting = false;
            },
            complete: () => {
              this.isSubmitting = false;
            },
          });
      } else {
        this.resetAll(ngForm);
        setTimeout(() => {
          this.isSubmitting = false;
        }, 1000);
      }
    } else if (ngForm.submitted && !this.agbChecked) {
      this.privacyPolicyInteracted = true;
    }
  }

  resetAll(ngForm: NgForm) {
    ngForm.resetForm();
    this.resetCustomFlags();
  }

  resetCustomFlags() {
    this.agbChecked = false;
    this.nameError = false;
    this.emailError = false;
    this.messageError = false;
    this.emailInvalid = false;
    this.nameFocus = false;
    this.emailFocus = false;
    this.messageFocus = false;
    this.nameFocusLabel = false;
    this.emailFocusLabel = false;
    this.messageFocusLabel = false;
    this.privacyPolicyInteracted = false;
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

  scrollToSection() {
    const element = document.getElementById('ladingPage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
  }

  emailSendPopUp() {
    this.isEmailSendVisible = true;
    setTimeout(() => {
      this.isEmailSendVisible = false;
    }, 2000);
  }
}
