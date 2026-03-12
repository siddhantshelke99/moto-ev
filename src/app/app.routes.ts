import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { ScootersPageComponent } from './pages/scooters/scooters-page.component';
import { ScooterDetailsPageComponent } from './pages/scooter-details/scooter-details-page.component';
import { TechnologyPageComponent } from './pages/technology/technology-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { GalleryPageComponent } from './pages/gallery/gallery-page.component';
import { DealersTestRidePageComponent } from './pages/dealers-test-ride/dealers-test-ride-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, data: { animation: 'Home' } },
  { path: 'scooters', component: ScootersPageComponent, data: { animation: 'Scooters' } },
  { path: 'scooters/:id', component: ScooterDetailsPageComponent, data: { animation: 'ScooterDetails' } },
  { path: 'technology', component: TechnologyPageComponent, data: { animation: 'Technology' } },
  { path: 'about', component: AboutPageComponent, data: { animation: 'About' } },
  { path: 'gallery', component: GalleryPageComponent, data: { animation: 'Gallery' } },
  { path: 'dealers', component: DealersTestRidePageComponent, data: { animation: 'Dealers' } },
  { path: 'contact', component: ContactPageComponent, data: { animation: 'Contact' } },
  { path: '**', redirectTo: '' }
];
