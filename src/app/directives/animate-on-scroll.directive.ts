import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]', // So rufen wir die Directive im HTML auf
  standalone: true // Füge dies hinzu, wenn dein Projekt Standalone-Components nutzt
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    const options = {
      root: document.querySelector('.main-page-container'), // Dein Scroll-Container
      threshold: 0.2
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Füge die sichtbare Klasse hinzu
          entry.target.classList.add('is-visible');
          // Und stoppe die Beobachtung
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    // Beobachte das Element, auf dem die Directive sitzt
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    // Räume auf, wenn das Element zerstört wird
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}