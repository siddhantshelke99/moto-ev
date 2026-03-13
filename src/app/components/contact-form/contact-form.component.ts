import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly WEB3FORMS_ACCESS_KEY = '8d114832-1f5c-47bc-9fa0-e2cc8b7b7991'; 

  readonly isSubmitting = signal(false);
  readonly status = signal<'idle' | 'success' | 'error'>('idle');
  readonly statusMessage = signal('');

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set('error');
      this.statusMessage.set('Please fill all required fields before sending.');
      return;
    }

    this.isSubmitting.set(true);
    this.status.set('idle');

    // Prepare the data with your Access Key
    const formData = {
      ...this.form.getRawValue(),
      access_key: this.WEB3FORMS_ACCESS_KEY
    };

    // Use the Web3Forms public API endpoint
    this.http.post('https://api.web3forms.com/submit', formData).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.status.set('success');
        this.statusMessage.set('Message sent successfully. We will contact you soon.');
        this.form.reset();
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting.set(false);
        this.status.set('error');
        this.statusMessage.set('Something went wrong. Please try again later.');
        console.error('Submission Error:', error);
      }
    });
  }
}
