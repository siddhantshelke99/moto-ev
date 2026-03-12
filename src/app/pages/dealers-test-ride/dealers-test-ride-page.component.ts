import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DealerSectionComponent, DealerData } from '../../components/dealer-section/dealer-section.component';

@Component({
  selector: 'app-dealers-test-ride-page',
  imports: [DealerSectionComponent, ReactiveFormsModule],
  templateUrl: './dealers-test-ride-page.component.html',
  styleUrl: './dealers-test-ride-page.component.scss'
})
export class DealersTestRidePageComponent {
  readonly dealers: DealerData[] = [
    { city: 'City Center', address: '102 Market Avenue, Downtown', mapImage: '/images/map-city-center.svg' },
    { city: 'Riverside', address: '58 Riverfront Boulevard', mapImage: '/images/map-riverside.svg' },
    { city: 'Hillview', address: '17 Horizon Street, Hillview', mapImage: '/images/map-hillview.svg' }
  ];

  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    date: ['', Validators.required]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }
}
