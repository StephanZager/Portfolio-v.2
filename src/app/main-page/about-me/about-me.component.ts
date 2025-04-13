import { Component } from '@angular/core';
import { PopUpMenuComponent } from "./pop-up-menu/pop-up-menu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [PopUpMenuComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  isMenuVisible = false;

  openMenu() {
    this.isMenuVisible = true;
  }

  closeMenu() {
    this.isMenuVisible = false;
  }
}
