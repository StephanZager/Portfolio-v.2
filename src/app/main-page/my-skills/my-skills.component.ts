import { Component } from '@angular/core';
import { ContinualLearningContentComponent } from "./continual-learning-content/continual-learning-content.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ContinualLearningContentComponent, SkillsComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

}
