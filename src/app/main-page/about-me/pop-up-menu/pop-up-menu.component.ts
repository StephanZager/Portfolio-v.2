import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-pop-up-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './pop-up-menu.component.html',
  styleUrl: './pop-up-menu.component.scss'
})
export class PopUpMenuComponent {

}
