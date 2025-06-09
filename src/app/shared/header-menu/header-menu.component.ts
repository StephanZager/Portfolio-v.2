import { Component } from '@angular/core';
//import { HeaderComponent } from '../header/header.component';
import { IconBarComponent } from "../icon-bar/icon-bar.component";
import { MenuService } from '../../sevice/menu.service';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [IconBarComponent],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  constructor(private menuService: MenuService) { }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMenu();
    }
  }

  closeMenu() {
    this.menuService.closeMenu();
  }

}
