import { Directive, ElementRef, Input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  @Input({ alias: 'appCountUp' }) target = 100;
  @Input() duration = 1400;
  @Input() prefix = '';
  @Input() suffix = '';

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.setText(this.target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();
        this.animate();
      },
      { threshold: 0.35 }
    );

    observer.observe(this.element.nativeElement);
  }

  private animate(): void {
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(this.target * eased);
      this.setText(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }

  private setText(value: number): void {
    this.element.nativeElement.textContent = `${this.prefix}${value.toLocaleString()}${this.suffix}`;
  }
}
