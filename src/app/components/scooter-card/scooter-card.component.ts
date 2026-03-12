import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

export interface ScooterCardData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tag?: string;
  range?: string;
  topSpeed?: string;
}

@Component({
  selector: 'app-scooter-card',
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './scooter-card.component.html',
  styleUrl: './scooter-card.component.scss'
})
export class ScooterCardComponent {
  @Input({ required: true }) scooter!: ScooterCardData;
}
