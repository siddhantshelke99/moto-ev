import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FeatureCardsComponent } from '../../components/feature-cards/feature-cards.component';
import { ScooterCardComponent, ScooterCardData } from '../../components/scooter-card/scooter-card.component';
import { StatCounterComponent } from '../../components/stat-counter/stat-counter.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    HeroSectionComponent,
    FeatureCardsComponent,
    ScooterCardComponent,
    StatCounterComponent,
    ScrollRevealDirective
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  readonly features = [
    { icon: '181KM', title: 'Extended Range', description: 'Ride up to 181 km on a full charge with optimized energy recovery.' },
    { icon: '750K+', title: 'Connected Riders', description: 'A fast-growing ecosystem with app-connected ownership experience.' },
    { icon: 'AI NAV', title: 'Smart Ride Stack', description: 'Adaptive throttle maps, cruise presets, and predictive navigation.' }
  ];

  readonly stats = [
    { value: 181, suffix: ' km', label: 'True Range' },
    { value: 3, suffix: '.0s', label: '0-40 km/h' },
    { value: 750, suffix: 'k+', label: 'Connected Riders' },
    { value: 3200, suffix: '+', label: 'Charging Points' }
  ];
  readonly scooters: ScooterCardData[] = [
    {
      id: 'neo-x1',
      name: 'VoltRide Neo X1',
      description: 'Urban-focused flagship with refined comfort and punchy acceleration.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric690f0c38d0665.jpg'
    },
    {
      id: 'volt-r',
      name: 'VoltRide Volt R',
      description: 'Long-range premium model for intercity freedom and fast charging.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric68a806fdb536c.jpg'
    }
  ];

  readonly campaignPanels = [
    {
      title: 'Move To The New Electric Standard',
      description: 'Designed for India-first roads, weather, and ride patterns with flagship quality at every touchpoint.',
      image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric690f0c38d0665.jpg'
    },
    {
      title: 'HyperCharge Network Ready',
      description: 'Rapid charging access designed to keep your daily commute and weekend plans uninterrupted.',
      image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric68a806fdb536c.jpg'
    }
  ];


  readonly storySteps = [
    {
      title: 'Designed For Real Roads',
      text: 'Balanced chassis geometry and ride control tuned for dense city streets and highway stretches.'
    },
    {
      title: 'Software-Defined Ride Modes',
      text: 'Customize acceleration, regen, and cruise behavior using smart profiles from the mobile app.'
    },
    {
      title: 'Fast Charging Confidence',
      text: 'Planned charging ecosystem with route-aware recommendations and live slot updates.'
    },
    {
      title: 'Fast Charging Confidence',
      text: 'Planned charging ecosystem with route-aware recommendations and live slot updates.'
    },

  ];
}
