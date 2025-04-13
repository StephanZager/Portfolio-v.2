import { Component } from '@angular/core';
import { PopUpLearningComponent } from './pop-up-learning/pop-up-learning.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-continual-learning-content',
  standalone: true,
  imports: [PopUpLearningComponent,CommonModule],
  templateUrl: './continual-learning-content.component.html',
  styleUrl: './continual-learning-content.component.scss'
})
export class ContinualLearningContentComponent {

  isPopUpVisible:boolean = false;

  openPopUp(){
    this.isPopUpVisible = true;
  }

  closePopUp(){
    this.isPopUpVisible = false
  }

}
