import { Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

export interface DealerData {
  city: string;
  address: string;
  mapImage: string;
}

@Component({
  selector: 'app-dealer-section',
  imports: [ScrollRevealDirective],
  templateUrl: './dealer-section.component.html',
  styleUrl: './dealer-section.component.scss'
})
export class DealerSectionComponent {
  @Input({ required: true }) dealers: DealerData[] = [];
}
