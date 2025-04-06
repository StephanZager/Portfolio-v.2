import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

  scrollLink = [
    { id: 'ladingPage' },
    { id: 'aboutMe' },
    { id: 'mySkills' },
    { id: 'myWork' },
    { id: 'referenzen' },
    { id: 'contact' }
  ];
  constructor(private router: Router) { }

  activeRoute: string = '';

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        this.activeRoute = event.urlAfterRedirects.split('/')[1];
      }
    });
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Scrolling to:', sectionId, element);

      const container = document.querySelector('.main-page-container') as HTMLElement;
      if (container) {
        container.style.scrollSnapType = 'none';
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        if (container) {
          container.style.scrollSnapType = 'y mandatory';
        }
      }, 1000);
    } else {
      console.error('Element not found:', sectionId);
    }
  }

}
