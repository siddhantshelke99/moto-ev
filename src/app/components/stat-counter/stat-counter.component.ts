import { Component, Input } from '@angular/core';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-stat-counter',
  imports: [CountUpDirective, ScrollRevealDirective],
  templateUrl: './stat-counter.component.html',
  styleUrl: './stat-counter.component.scss'
})
export class StatCounterComponent {
  @Input({ required: true }) value = 0;
  @Input() prefix = '';
  @Input() suffix = '';
  @Input({ required: true }) label = '';
}
