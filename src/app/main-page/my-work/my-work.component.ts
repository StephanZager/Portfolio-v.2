import { Component } from '@angular/core';
import { ProjectsComponent } from "./projects/projects.component";
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule,AnimateOnScrollDirective],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

}
