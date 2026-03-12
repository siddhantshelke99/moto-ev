import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  readonly mapsLink =
    'https://www.google.com/maps/place/Croma+-+Baner/@18.5659272,73.7687416,716m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2beca8190c7dd:0xe042498ce2d318c0!8m2!3d18.5659272!4d73.7713165!16s%2Fg%2F11hcjyzp3s';
  readonly contactEmail = 'siddhantshelke99@gmail.com';
  readonly locationLabel = 'Croma - Baner, Pune';
  readonly mapEmbedUrl: SafeResourceUrl;

  private readonly sanitizer = inject(DomSanitizer);

  constructor() {
    const embed =
      'https://maps.google.com/maps?output=embed&q=' +
      encodeURIComponent('18.5659272,73.7713165 (Croma - Baner, Pune)') +
      '&z=16';
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
  }
}
