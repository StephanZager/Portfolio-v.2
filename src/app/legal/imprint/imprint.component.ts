import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(private location: Location) { }

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
