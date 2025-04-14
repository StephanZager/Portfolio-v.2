import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { IconBarComponent } from "../icon-bar/icon-bar.component";
import { MainPageComponent } from '../../main-page/main-page.component';
import { ScrollService } from '../../sevice/scroll.service';
import { SectionService } from '../../sevice/section.service';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from "../header-menu/header-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconBarComponent, MainPageComponent, CommonModule, HeaderMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled: boolean = false;
  toggleMenu: boolean = false;
  currentLanguage = 'DE';
  currentSection: string = '';

  constructor(private scrollService: ScrollService, private sectionService: SectionService) { }

  ngOnInit() {
    this.scrollService.scroll$.subscribe((scrolled) => {
      this.isScrolled = scrolled;

    });
    this.sectionService.currentSection$.subscribe((section) => {
      this.currentSection = section;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 50;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const interval = setInterval(() => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        this.isScrolled = scrollPosition > 50;

        if (scrollPosition === 0) {
          clearInterval(interval);
        }
      }, 50);
    }
  }


  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'DE' ? 'EN' : 'DE';
  }

  openMenu() {
    this.toggleMenu = true;
  }
}