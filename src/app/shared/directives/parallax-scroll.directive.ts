import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appParallaxScroll]',
  standalone: true
})
export class ParallaxScrollDirective implements OnInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  @Input() speed = 0.12;

  private rafId: number | null = null;
  private readonly onScroll = () => {
    if (this.rafId !== null) {
      return;
    }

    this.rafId = requestAnimationFrame(() => {
      const rect = this.element.nativeElement.getBoundingClientRect();
      const offset = (window.innerHeight * 0.5 - rect.top) * this.speed;
      this.renderer.setStyle(this.element.nativeElement, 'transform', `translate3d(0, ${offset.toFixed(2)}px, 0)`);
      this.rafId = null;
    });
  };

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.renderer.setStyle(this.element.nativeElement, 'will-change', 'transform');
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.removeEventListener('scroll', this.onScroll);
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}

