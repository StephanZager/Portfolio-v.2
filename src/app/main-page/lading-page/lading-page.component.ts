import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IconBarComponent } from "../../shared/icon-bar/icon-bar.component";
import { ScrollDownComponent } from "./scroll-down/scroll-down.component";
import { TranslateModule} from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/header/header.component';



@Component({
  selector: 'app-lading-page',
  standalone: true,
  imports: [IconBarComponent, ScrollDownComponent, TranslateModule, HeaderComponent],
  templateUrl: './lading-page.component.html',
  styleUrl: './lading-page.component.scss'
})
export class LadingPageComponent {

  scrollToSection() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
  }

}


