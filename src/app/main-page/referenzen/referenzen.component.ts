import { Component } from '@angular/core';
import { ReferenzenItemComponent } from "./referenzen-item/referenzen-item.component";
import { link } from 'fs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-referenzen',
  standalone: true,
  imports: [ReferenzenItemComponent, CommonModule],
  templateUrl: './referenzen.component.html',
  styleUrl: './referenzen.component.scss'
})
export class ReferenzenComponent {
  referenzenData = [
    {
      name: 'Johanne Lennike',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cum voluptatem deleniti qui necessitatibus iure nihil, illo illum, cupiditate tempore nesciunt dolore ipsa. Laborum eius officiis accusamus distinctio reprehenderit dicta.',
      qualifikation: 'Team Partner',
      link: '#'
    },
    {
      name: 'Lisa Hübler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cum voluptatem deleniti qui necessitatibus iure nihil, illo illum, cupiditate tempore nesciunt dolore ipsa. Laborum eius officiis accusamus distinctio reprehenderit dicta.',
      qualifikation: 'Team Partner',
      link: '#'
    },
    {
      name: 'Lukas Zager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cum voluptatem deleniti qui necessitatibus iure nihil, illo illum, cupiditate tempore nesciunt dolore ipsa. Laborum eius officiis accusamus distinctio reprehenderit dicta.',
      qualifikation: 'Team Partner',
      link: '#'
    },
  ]

}
