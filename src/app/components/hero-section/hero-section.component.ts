import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  animations: [
    trigger('heroReveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroSectionComponent {
  @Input({ required: true }) title = 'Charge Into The Future';
  @Input({ required: true }) description = 'Precision-engineered electric scooters for modern cities.';
  @Input() heroImage = '/images/hero-scooter.svg';
  @Input() heroAlt = 'VoltRide hero scooter';
}

