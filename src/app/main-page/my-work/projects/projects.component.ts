import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  test2:boolean = false;
  curentProject = 0;

  projects = [
    {
      name: 'DABubble',
      technology: 'HTML,CSS,Firebase,ANGULAR,TypeScript',
      description: 'Hallo das da bubble und bla bla Hallo das da bubble und bla bla Hallo das da bubble und bla bla ',
      img: {
        picture: './../../../../assets/img/projects/da-bubble.svg',
        bg: '$white',
        icon:'./../../../../assets/img/icons/capa.svg',

      },
      linkGithub: 'https://github.com/StephanZager/join.git',
      linkLive: 'https://www.join.stephan-zager.de//',
    },
    {
      name: 'Join',
      technology: 'HTML,CSS,Firebase,JavaScript',
      description: 'Task-Manager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      img: {
        picture: './../../../../assets/img/projects/join.svg',
        bg: '$white',
        icon:'./../../../../assets/img/icons/join-check.svg',
      },
      linkGithub: 'https://github.com/StephanZager/join.git',
      linkLive: 'https://www.join.stephan-zager.de//',
    },
    {
      name: 'El Pollo Loco',
      technology: 'HTML,CSS,JavaScript',
      description: 'Ein einfaches Jump-and-Run-Spiel basierend auf objektorientiertem Programmieren. Hilf Pedro, Münzen und Giftflaschen zu finden, um gegen das Killerhuhn zu kämpfen.',
      img: {
        picture: './../../../../assets/img/projects/Pollo.svg',
        bg: '$white',
        icon:'./../../../../assets/img/icons/loco-chicken.svg',
      },
      linkGithub: 'https://github.com/StephanZager/join.git',
      linkLive: 'https://www.join.stephan-zager.de//',
    }
  ];

  next() {
    this.curentProject++;
    if (this.curentProject >= Object.keys(this.projects).length) {
      this.curentProject = 0;
    }
  }

  previous() {
    this.curentProject--;
    if (this.curentProject < 0) {
      this.curentProject = this.projects.length - 1;
    }
  }

  getTechnologies(index: number): string {
    return this.projects[index].technology.replace(/,/g, ' | ');
  }

  test(){
    this.test2 = true
    console.log('Hallo',this.test2)
  }
}
