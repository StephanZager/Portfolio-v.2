import { Component } from '@angular/core';
import { ReferenzenItemComponent } from "./referenzen-item/referenzen-item.component";
import { link } from 'fs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-referenzen',
  standalone: true,
  imports: [ReferenzenItemComponent, CommonModule, TranslateModule],
  templateUrl: './referenzen.component.html',
  styleUrl: './referenzen.component.scss'
})
export class ReferenzenComponent {
  referenzenData = [
    {
      name: 'Johannes Linnecke',
      description: 'referenzen.feedback.johannes',
      qualifikation: 'Team Partner',
      link: '#'
    },
    {
      name: 'Andrei Butalov',
      description: 'referenzen.feedback.andrei',
      qualifikation: 'Team Partner',
      link: '#'
    },
    {
      name: 'Jens Natzick',
      description: 'referenzen.feedback.jens',
      qualifikation: 'Team Partner',
      link: '#'
    },
  ]

}
