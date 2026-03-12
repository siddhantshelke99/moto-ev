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
    }console.log(this.form.value,"test");
    

    this.isSubmitting.set(true);
    this.status.set('idle');

    this.http.post('/api/contact', this.form.getRawValue()).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.status.set('success');
        this.statusMessage.set('Message sent successfully. We will contact you soon.');
        this.form.reset();
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting.set(false);
        this.status.set('error');

        if (error.status === 0 || error.status === 404) {
          this.statusMessage.set('Contact API is not reachable. Run the SSR server to enable /api/contact.');
          return;
        }

        const message = (error.error?.error as string) || 'Unable to send right now. Please try again.';
        this.statusMessage.set(message);
      }
    });
  }
}
