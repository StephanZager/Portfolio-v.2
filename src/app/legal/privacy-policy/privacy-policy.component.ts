import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

   constructor(private location: Location) {}

  goBack() {
    this.location.back();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  }
}
