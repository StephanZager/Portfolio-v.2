import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { IconBarComponent } from "../icon-bar/icon-bar.component";
import { MainPageComponent } from '../../main-page/main-page.component';
import { ScrollService } from '../../sevice/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconBarComponent, MainPageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    // Abonniere den ScrollService, um die Scroll-Informationen zu erhalten
    this.scrollService.scroll$.subscribe((scrolled) => {
      this.isScrolled = scrolled;
      console.log('Header received scroll event:', scrolled);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 50; // Aktualisiere die Position dynamisch
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
      // Während des Scrollens nach oben die `isScrolled`-Variable zurücksetzen
      const interval = setInterval(() => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        this.isScrolled = scrollPosition > 50;
  
        if (scrollPosition === 0) {
          clearInterval(interval); // Stoppe das Intervall, wenn oben angekommen
        }
      }, 50); // Überprüfe die Scroll-Position alle 50ms
    }
  }
}