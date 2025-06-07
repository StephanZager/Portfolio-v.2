import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-referenzen-item',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './referenzen-item.component.html',
  styleUrl: './referenzen-item.component.scss'
})
export class ReferenzenItemComponent {

  @Input() data: any;

}
