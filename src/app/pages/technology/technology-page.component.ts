import { Component } from '@angular/core';
import { FeatureCardsComponent } from '../../components/feature-cards/feature-cards.component';

@Component({
  selector: 'app-technology-page',
  imports: [FeatureCardsComponent],
  templateUrl: './technology-page.component.html',
  styleUrl: './technology-page.component.scss'
})
export class TechnologyPageComponent {
  readonly technologies = [
    {
      icon: 'BATT',
      title: 'Battery Technology',
      description: 'Multi-layer thermal management with intelligent cell balancing for safer, longer battery life.'
    },
    {
      icon: 'MOTOR',
      title: 'Motor Technology',
      description: 'High-efficiency PMSM motor delivers responsive torque and smooth acceleration at every speed.'
    },
    {
      icon: 'SMART',
      title: 'Smart Connectivity',
      description: 'Real-time tracking, keyless unlock, geofencing, and remote diagnostics from the VoltRide app.'
    }
  ];
}
