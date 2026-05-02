// src/app/directives/reveal.directive.ts
import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Optional delay index: 0 | 1 | 2 | 3 | 4 */
  @Input() revealDelay: 0 | 1 | 2 | 3 | 4 = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const host = this.el.nativeElement;

    // Base reveal class is always applied
    host.classList.add('reveal');

    // Add delay class if requested
    if (this.revealDelay > 0) {
      host.classList.add(`reveal-delay-${this.revealDelay}`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
