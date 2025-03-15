import { Component } from '@angular/core';
import { ContinualLearningContentComponent } from "./continual-learning-content/continual-learning-content.component";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ContinualLearningContentComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

}
