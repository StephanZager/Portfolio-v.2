import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './pop-up-menu.component.html',
  styleUrl: './pop-up-menu.component.scss'
})
export class PopUpMenuComponent {

  @Input() isMenuVisible: boolean = false;
  @Output() menuClosed = new EventEmitter<void>();

  closeMenu() {
    this.menuClosed.emit();
  }
}
