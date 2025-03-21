import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LadingPageComponent } from "./lading-page/lading-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LadingPageComponent, AboutMeComponent, MySkillsComponent, MyWorkComponent, ContactComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements AfterViewInit {

  @ViewChild('mainPageContainer', { static: false }) mainPageContainer!: ElementRef;
  private lastScrollTop = 0;

  ngAfterViewInit() {
    if (this.mainPageContainer) {
      this.mainPageContainer.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onScroll() {
    const testElement = document.querySelector('.test') as HTMLElement;
    console.log('Scroll event detected');

    if (testElement) {
      const scrollPosition = this.mainPageContainer.nativeElement.scrollTop;

      if (scrollPosition > this.lastScrollTop) {
        testElement.classList.add('move-bottom-left');
        testElement.classList.remove('move-top-center');
      } else {
        testElement.classList.add('move-top-center');
        testElement.classList.remove('move-bottom-left');
      }

      this.lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
    }
  }
}