import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorkOnItPopUpComponent } from "./my-work-on-it-pop-up/my-work-on-it-pop-up.component";
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MyWorkOnItPopUpComponent,TranslateModule,AnimateOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isPopUpVisible: boolean = false;
  curentProject = 0;

  projects = [
    {
      name: 'DABubble',
      technology: 'HTML,CSS,Firebase,ANGULAR,TypeScript',
      description: 'portfolio.projects.dabubble.description',
      popupText: 'portfolio.projects.dabubble.popup',
      img: {
        picture: './../../../../assets/img/projects/da-bubble.svg',
        bg: '#679AAC',
        icon: './../../../../assets/img/icons/capa.svg',

      },
      linkGithub: 'https://github.com/StephanZager/DABubble',
      linkLive: 'https://www.dabubble.stephan-zager.de/',
    },
    {
      name: 'Join',
      technology: 'HTML,CSS,Firebase,JavaScript',
      description: 'portfolio.projects.join.description',
      popupText: 'portfolio.projects.join.popup',
      img: {
        picture: './../../../../assets/img/projects/join.svg',
        bg: '#F9AF42',
        icon: './../../../../assets/img/icons/join-check.svg',
      },
      linkGithub: 'https://github.com/StephanZager/join.git',
      linkLive: 'https://www.join.stephan-zager.de//',
    },
    {
      name: 'El Pollo Loco',
      technology: 'HTML,CSS,JavaScript',
      description: 'portfolio.projects.elPolloLoco.description',
      popupText: 'portfolio.projects.elPolloLoco.popup',
      img: {
        picture: './../../../../assets/img/projects/Pollo.svg',
        bg: '#FF834F',
        icon: './../../../../assets/img/icons/loco-chicken.svg',
      },
      linkGithub: 'https://github.com/StephanZager/El-Pollo-Loco.git',
      linkLive: 'https://www.el-pollo-loco.stephan-zager.de/index.html',
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

  openPopUp() {
    this.isPopUpVisible = true;

  }

  closePopUp() {
    this.isPopUpVisible = false;
  }
}
