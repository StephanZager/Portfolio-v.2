import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-referenzen-item',
  standalone: true,
  imports: [],
  templateUrl: './referenzen-item.component.html',
  styleUrl: './referenzen-item.component.scss'
})
export class ReferenzenItemComponent {

  @Input() data: any;

}
