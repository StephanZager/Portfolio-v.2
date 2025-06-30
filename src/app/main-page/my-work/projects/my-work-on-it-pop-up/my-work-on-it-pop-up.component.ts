import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-work-on-it-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './my-work-on-it-pop-up.component.html',
  styleUrl: './my-work-on-it-pop-up.component.scss'
})
export class MyWorkOnItPopUpComponent {
  @Input() text: string = '';

  @Input() isPopUpVisible: boolean = false;
  @Output() menuClosed = new EventEmitter<void>();

  closeMenu() {
    this.menuClosed.emit();
  }

}
