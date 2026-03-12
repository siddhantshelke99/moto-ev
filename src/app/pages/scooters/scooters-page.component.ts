import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ScooterCardComponent, ScooterCardData } from '../../components/scooter-card/scooter-card.component';

@Component({
  selector: 'app-scooters-page',
  imports: [RouterLink, ScooterCardComponent],
  templateUrl: './scooters-page.component.html',
  styleUrl: './scooters-page.component.scss',
  animations: [
    trigger('heroEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('cardsEnter', [
      transition(':enter', [
        query(
          '.card-shell',
          [
            style({ opacity: 0, transform: 'translateY(26px)' }),
            stagger(110, [animate('520ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ScootersPageComponent {
  readonly scooters: ScooterCardData[] = [
    {
      id: 'neo-x1',
      name: 'Neo X1',
      description: 'Everyday comfort with 140 km certified range.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric690f0c38d0665.jpg',
      tag: 'City Pro',
      range: '140 km range',
      topSpeed: '82 km/h top speed'
    },
    {
      id: 'volt-r',
      name: 'Volt R',
      description: 'Long-range flagship with dual riding modes.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric68a806fdb536c.jpg',
      tag: 'Touring',
      range: '181 km range',
      topSpeed: '95 km/h top speed'
    },
    {
      id: 'urban-s',
      name: 'Urban S',
      description: 'Compact city model with agile handling.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric690f0c38d0665.jpg',
      tag: 'Compact',
      range: '120 km range',
      topSpeed: '75 km/h top speed'
    },
    {
      id: 'terra-max',
      name: 'Terra Max',
      description: 'Built for rough roads with stronger suspension.',
      imageUrl: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric68a806fdb536c.jpg',
      tag: 'Adventure',
      range: '165 km range',
      topSpeed: '88 km/h top speed'
    }
  ];
}
