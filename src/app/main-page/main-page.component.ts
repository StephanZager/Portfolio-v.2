import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LadingPageComponent } from "./lading-page/lading-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ContactComponent } from "./contact/contact.component";
import { ReferenzenComponent } from "./referenzen/referenzen.component";
import { NavigationBarComponent } from "../shared/navigation-bar/navigation-bar.component";
import { ScrollService } from '../sevice/scroll.service';
import { SectionService } from '../sevice/section.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LadingPageComponent, AboutMeComponent, MySkillsComponent, MyWorkComponent, ContactComponent, ReferenzenComponent, NavigationBarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('mainPageContainer', { static: false }) mainPageContainer!: ElementRef;
  currentSection: string = ''; // Speichert die aktuelle Section
  private lastScrollTop = 0;

  constructor(private scrollService: ScrollService, private sectionService: SectionService) { }

  ngOnInit() {
    this.sectionService.setCurrentSection('ladingPage');
  }

  ngAfterViewInit() {
    if (this.mainPageContainer) {
      this.mainPageContainer.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onScroll() {
    const scrollPosition = this.mainPageContainer.nativeElement.scrollTop;
    this.scrollService.setScrolled(scrollPosition > 50);


    let activeSectionFound = false;

    const sections = this.mainPageContainer.nativeElement.querySelectorAll('.section');
    sections.forEach((section: HTMLElement) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2 && !activeSectionFound) {
        section.classList.add('is-active');
        this.sectionService.setCurrentSection(section.id);
        activeSectionFound = true;
      } else {
        section.classList.remove('is-active');
      }
    });

    this.lastScrollTop = scrollPosition;
  }
}