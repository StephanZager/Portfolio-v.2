import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-referenzen-item',
  standalone: true,
  imports: [TranslateModule, AnimateOnScrollDirective, CommonModule],
  templateUrl: './referenzen-item.component.html',
  styleUrl: './referenzen-item.component.scss'
})
export class ReferenzenItemComponent {
  @Input() referenzenData: any[] = [];
  @Input() data: any;

}
