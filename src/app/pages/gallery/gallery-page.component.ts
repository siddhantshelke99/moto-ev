import { Component, signal } from '@angular/core';
import { GalleryGridComponent, GalleryItem } from '../../components/gallery-grid/gallery-grid.component';

@Component({
  selector: 'app-gallery-page',
  imports: [GalleryGridComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {
  readonly items: GalleryItem[] = [
    {
      image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric690f0c38d0665.jpg',
      title: 'Neo X1 Studio Front',
      tag: 'Product'
    },
    {
      image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric68a806fdb536c.jpg',
      title: 'Charge Dock Experience',
      tag: 'Charging'
    },
    {
      image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric690f0c38d0665.jpg',
      title: 'Urban Commute Shot',
      tag: 'Lifestyle'
    },
    {
      image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric68a806fdb536c.jpg',
      title: 'Smart Dashboard UI',
      tag: 'Technology'
    },
    {
      image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric690f0c38d0665.jpg',
      title: 'Evening Ride Profile',
      tag: 'Campaign'
    },
    {
      image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-electric/source/iqube-electric68a806fdb536c.jpg',
      title: 'VoltRide Performance Pack',
      tag: 'Performance'
    }
  ];

  readonly selectedItem = signal<GalleryItem | null>(null);

  openLightbox(item: GalleryItem): void {
    this.selectedItem.set(item);
  }

  closeLightbox(): void {
    this.selectedItem.set(null);
  }
}
