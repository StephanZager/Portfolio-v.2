import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SectionService } from '../../sevice/section.service';

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

  isScrolled = false;
  currentSection: string = '';

  constructor(private router: Router, private sectionService: SectionService) { }

  activeRoute: string = '';

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        this.activeRoute = event.urlAfterRedirects.split('/')[1];
      }
    });

    this.sectionService.currentSection$.subscribe((section) => {
      this.currentSection = section;
      console.log(this.currentSection)
    });
  }


  activeSection: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('Scroll event detected');
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
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
    }
  }

}
