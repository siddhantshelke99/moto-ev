import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

export interface GalleryItem {
  image: string;
  title: string;
  tag: string;
}

@Component({
  selector: 'app-gallery-grid',
  imports: [ScrollRevealDirective],
  templateUrl: './gallery-grid.component.html',
  styleUrl: './gallery-grid.component.scss'
})
export class GalleryGridComponent {
  @Input({ required: true }) items: GalleryItem[] = [];
  @Output() preview = new EventEmitter<GalleryItem>();
}
