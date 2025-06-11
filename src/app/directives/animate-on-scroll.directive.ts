import { Directive, ElementRef, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone 
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.zone.run(() => {
              entry.target.classList.add('is-visible');
            });
            this.observer?.unobserve(entry.target);
          }
        });
      });

      this.observer.observe(this.element.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}