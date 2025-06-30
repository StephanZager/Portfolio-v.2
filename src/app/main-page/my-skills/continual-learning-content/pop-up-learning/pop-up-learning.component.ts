import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up-learning',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pop-up-learning.component.html',
  styleUrl: './pop-up-learning.component.scss'
})
export class PopUpLearningComponent {

  @Input() isMenuVisible: boolean = false;
  @Output() menuClosed = new EventEmitter<void>();

  closeMenu() {
    this.menuClosed.emit();
  }
}
