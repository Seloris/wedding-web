import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-photos',
  standalone: true,
  template: `<app-page>
    <h1 class="text-center">Galerie de photos</h1>
    <div class="grid gap-2" [photoGalleryGroup]="{ arrowKeys: true, arrowEl: true }">
      @for (image of images; track image) {
        <div class="overflow-hidden hover:cursor-pointer" [photoGallery]="image.src">
          <img
            class="aspect-square object-cover transition-all hover:scale-105"
            [src]="image.thumb"
            [alt]="image.alt"
          />
        </div>
      }
    </div>
  </app-page>`,
  styles: `
    :host {
      display: block;
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageComponent, PhotoGalleryModule],
})
export class PhotosComponent {
  images = indexes.map((i) => ({
    src: `assets/civil/M&D-${i}.jpg`,
    thumb: `assets/civil/thumbnails/M&D-${i}.jpg`,
    alt: `Photo ${i}`,
  }));
}

const indexes = [
  15, 25, 27, 44, 48, 56, 63, 78, 85, 86, 88, 108, 117, 128, 131, 132, 137, 140, 146, 149, 152, 158,
  164, 172, 174, 182, 191, 227, 254, 259, 262, 266, 285, 287, 288, 291, 293, 296, 298, 299, 318,
  322, 325, 327, 340, 345, 350, 355, 360, 361, 366, 374, 381, 385, 389, 391, 396, 398, 399, 404,
  406, 410, 414, 417, 432, 437, 441,
];
