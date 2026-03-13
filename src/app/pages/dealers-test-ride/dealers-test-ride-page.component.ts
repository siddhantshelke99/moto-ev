import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DealerSectionComponent, DealerData } from '../../components/dealer-section/dealer-section.component';
import { HttpClient } from '@angular/common/http'; //
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
  private readonly http = inject(HttpClient); //
  readonly isSubmitting = signal(false);
  readonly statusMessage = signal('');
  readonly form = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    date: ['', Validators.required]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.statusMessage.set('Please fill in all fields.');
      return;
    }

    this.isSubmitting.set(true);

    // Prepare data for Web3Forms
    const payload = {
      ...this.form.getRawValue(),
      subject: 'New Test Ride Booking',
      access_key: '8d114832-1f5c-47bc-9fa0-e2cc8b7b7991' 
    };

    this.http.post('https://api.web3forms.com/submit', payload).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.statusMessage.set('Test ride reserved successfully!');
        this.form.reset();
      },
      error: () => {
        this.isSubmitting.set(false);
        this.statusMessage.set('Failed to reserve. Please try again.');
      }
    });
  }
}

