import { Component } from '@angular/core';
import { PopUpMenuComponent } from "./pop-up-menu/pop-up-menu.component";
import { CommonModule } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [PopUpMenuComponent, CommonModule,TranslateModule,AnimateOnScrollDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
  scrollToSection() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
  }

  isMenuVisible = false;

  openMenu() {
    this.isMenuVisible = true;
  }

  closeMenu() {
    this.isMenuVisible = false;
  }
}
