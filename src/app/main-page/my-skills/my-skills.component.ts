import { Component } from '@angular/core';
import { ContinualLearningContentComponent } from "./continual-learning-content/continual-learning-content.component";
import { SkillsComponent } from "./skills/skills.component";
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ContinualLearningContentComponent, SkillsComponent,TranslateModule,AnimateOnScrollDirective],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

}
