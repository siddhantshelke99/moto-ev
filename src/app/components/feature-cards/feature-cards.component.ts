import { Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-feature-cards',
  imports: [ScrollRevealDirective],
  templateUrl: './feature-cards.component.html',
  styleUrl: './feature-cards.component.scss'
})
export class FeatureCardsComponent {
  @Input({ required: true }) features: Array<{ title: string; description: string; icon: string }> = [];
}
