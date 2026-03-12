import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpecificationCardComponent } from '../../components/specification-card/specification-card.component';
import { FeatureCardsComponent } from '../../components/feature-cards/feature-cards.component';

interface ScooterDetail {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  specs: Array<{ label: string; value: string }>;
}

@Component({
  selector: 'app-scooter-details-page',
  imports: [RouterLink, SpecificationCardComponent, FeatureCardsComponent],
  templateUrl: './scooter-details-page.component.html',
  styleUrl: './scooter-details-page.component.scss'
})
export class ScooterDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly data: ScooterDetail[] = [
    {
      id: 'neo-x1',
      name: 'Neo X1',
      description: 'Neo X1 balances daily practicality with a sporty ride feel. It features regenerative braking, connected diagnostics, and all-day comfort ergonomics.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric690f0c38d0665.jpg',
      specs: [
        { label: 'Range', value: '140 km' },
        { label: 'Top Speed', value: '82 km/h' },
        { label: 'Charge Time', value: '3.2 hours' },
        { label: 'Motor Power', value: '6.2 kW' }
      ]
    },
    {
      id: 'volt-r',
      name: 'Volt R',
      description: 'Volt R is engineered for riders who need endurance and premium comfort. Its adaptive power mapping ensures smooth delivery in every mode.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric390f0c38d0665.jpg',
      specs: [
        { label: 'Range', value: '180 km' },
        { label: 'Top Speed', value: '95 km/h' },
        { label: 'Charge Time', value: '2.5 hours' },
        { label: 'Motor Power', value: '8.5 kW' }
      ]
    },
    {
      id: 'urban-s',
      name: 'Urban S',
      description: 'Urban S is the nimble city specialist with compact proportions, quick charging, and seamless smartphone integration.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric490f0c38d0665.jpg',
      specs: [
        { label: 'Range', value: '120 km' },
        { label: 'Top Speed', value: '75 km/h' },
        { label: 'Charge Time', value: '3.1 hours' },
        { label: 'Motor Power', value: '5.5 kW' }
      ]
    },
    {
      id: 'terra-max',
      name: 'Terra Max',
      description: 'Terra Max is tuned for mixed terrain with reinforced chassis geometry and high-torque acceleration for demanding routes.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric290f0c38d0665.jpg',
      specs: [
        { label: 'Range', value: '165 km' },
        { label: 'Top Speed', value: '88 km/h' },
        { label: 'Charge Time', value: '2.9 hours' },
        { label: 'Motor Power', value: '7.8 kW' }
      ]
    }
  ];

  readonly scooterId = this.route.snapshot.paramMap.get('id') ?? 'neo-x1';
  readonly scooter = this.data.find((item) => item.id === this.scooterId) ?? this.data[0];

  readonly keyFeatures = [
    { icon: 'APP', title: 'Smart App', description: 'Live battery diagnostics, ride analytics, and OTA software updates.' },
    { icon: 'NAV', title: 'Navigation', description: 'Turn-by-turn guidance with route optimization for charge points.' },
    { icon: 'SAFE', title: 'Safety Suite', description: 'Combined braking, traction control, and remote immobilizer system.' }
  ];
}

