import { Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-specification-card',
  imports: [ScrollRevealDirective],
  templateUrl: './specification-card.component.html',
  styleUrl: './specification-card.component.scss'
})
export class SpecificationCardComponent {
  @Input({ required: true }) label = 'Range';
  @Input({ required: true }) value = '120 km';
}
