import { Component, HostListener, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IconBarComponent } from "../icon-bar/icon-bar.component";
//import { MainPageComponent } from '../../main-page/main-page.component';
import { ScrollService } from '../../sevice/scroll.service';
import { SectionService } from '../../sevice/section.service';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from "../header-menu/header-menu.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../sevice/menu.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconBarComponent, CommonModule, HeaderMenuComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled: boolean = false;
  isMenuOpen = false;
  private menuSubscription: Subscription | undefined;

  //currentLanguage = 'de';
  currentSection: string = '';

  constructor(private scrollService: ScrollService, private sectionService: SectionService, public translate: TranslateService, private menuService: MenuService) {
    this.translate.setDefaultLang('de');
  }

  ngOnInit() {

    this.menuSubscription = this.menuService.menuOpen$.subscribe(isOpen => {
      this.isMenuOpen = isOpen;
    });

    this.scrollService.scroll$.subscribe((scrolled) => {
      this.isScrolled = scrolled;

    });
    this.sectionService.currentSection$.subscribe((section) => {
      this.currentSection = section;
    });
  }

  ngOnDestroy() {
    this.menuSubscription?.unsubscribe();
  }


  toggleHeaderMenu() {
    this.menuService.toggleMenu();
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
    // Lese die aktuelle Sprache aus dem Service
    const current = this.translate.currentLang;
    const newLang = current === 'de' ? 'en' : 'de';

    // Setze die neue Sprache über den Service.
    // Dies benachrichtigt die gesamte App über die Änderung.
    this.translate.use(newLang);
  }
}