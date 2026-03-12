import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isDark = signal(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      this.isDark.set(saved ? saved === 'dark' : true);
    }
  }

  toggleTheme(): void {
    const next = !this.isDark();
    this.isDark.set(next);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }
  }
}
