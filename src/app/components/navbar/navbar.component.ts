import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() isDark = false;
  @Output() themeToggle = new EventEmitter<void>();
  readonly isMobileMenuOpen = signal(false);

  readonly links = [
    { label: 'Home', path: '/' },
    { label: 'Scooters', path: '/scooters' },
    { label: 'Technology', path: '/technology' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Dealers', path: '/dealers' },
    { label: 'Contact', path: '/contact' },
    { label: 'About', path: '/about' },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
