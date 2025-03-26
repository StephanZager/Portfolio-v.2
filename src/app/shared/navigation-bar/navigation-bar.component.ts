import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

  scrollLink = [
    { id: 'ladingPage', label: 'Landing Page' },
    { id: 'aboutMe', label: 'About Me' },
    { id: 'mySkills', label: 'My Skills' },
    { id: 'myWork', label: 'My Work' },
    { id: 'referenzen', label: 'Referenzen' },
    { id: 'contact', label: 'Contact' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  }
}
