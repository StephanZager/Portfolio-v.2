import { Component } from '@angular/core';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  mySkillSet = [
    { name: 'HTML', img: './../../../../assets/img/icons/html.svg' },
    { name: 'CSS', img: './../../../../assets/img/icons/css.svg' },
    { name: 'JavaScript', img: './../../../../assets/img/icons/java-script.svg' },
    { name: 'TypeScript', img: './../../../../assets/img/icons/type-script.svg' },
    { name: 'Angular', img: './../../../../assets/img/icons/angular.svg' },
    { name: 'Firebase', img: './../../../../assets/img/icons/firebase.svg' },
    { name: 'Git', img: './../../../../assets/img/icons/git-hub.svg' },
    { name: 'API', img: './../../../../assets/img/icons/api.svg' },
    { name: 'Scrum', img: './../../../../assets/img/icons/scrum.svg' },
    { name: 'Material', img: './../../../../assets/img/icons/material.svg' }
  ];

}
