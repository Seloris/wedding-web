import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-photos',
  standalone: true,
  template: `<app-page>
    <h1 class="text-center">Galerie de photos</h1>
    <p class="mb-9 text-center">
      Lien vers la galerie complète ici :
      <a
        class="text-secondary underline"
        target="_blank"
        href="https://public.joomeo.com/albums/667d8473cddf4"
        >Joomeo Mariage M&D</a
      >
    </p>
    <div class="grid gap-2" id="gallery">
      @for (image of images; track image) {
        <a
          [attr.data-pswp-width]="image.width"
          [attr.data-pswp-height]="image.height"
          class="overflow-hidden hover:cursor-pointer"
          data-cropped="true"
          [href]="image.src"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="aspect-square object-cover transition-all hover:scale-105"
            [src]="image.thumb"
            alt=""
          />
        </a>
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
  imports: [CommonModule, PageComponent],
})
export class PhotosComponent implements OnInit {
  images = IMAGES.map((x) => ({
    ...x,
    src: '/assets/civil/' + x.src,
    thumb: '/assets/civil/' + x.src,
    alt: `Image ${x.index}`,
  }));

  ngOnInit() {
    setTimeout(() => {
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
        showHideAnimationType: 'zoom',
        zoom: true,
        wheelToZoom: true,
      });
      lightbox.init();
    }, 0);
  }
}

const IMAGES = [
  {
    src: 'M&D-15.jpg',
    index: 15,
    thumb: 'thumbnails/M&D-15.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-25.jpg',
    index: 25,
    thumb: 'thumbnails/M&D-25.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-27.jpg',
    index: 27,
    thumb: 'thumbnails/M&D-27.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-44.jpg',
    index: 44,
    thumb: 'thumbnails/M&D-44.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-48.jpg',
    index: 48,
    thumb: 'thumbnails/M&D-48.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-56.jpg',
    index: 56,
    thumb: 'thumbnails/M&D-56.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-63.jpg',
    index: 63,
    thumb: 'thumbnails/M&D-63.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-78.jpg',
    index: 78,
    thumb: 'thumbnails/M&D-78.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-85.jpg',
    index: 85,
    thumb: 'thumbnails/M&D-85.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-86.jpg',
    index: 86,
    thumb: 'thumbnails/M&D-86.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-88.jpg',
    index: 88,
    thumb: 'thumbnails/M&D-88.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-108.jpg',
    index: 108,
    thumb: 'thumbnails/M&D-108.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-117.jpg',
    index: 117,
    thumb: 'thumbnails/M&D-117.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-128.jpg',
    index: 128,
    thumb: 'thumbnails/M&D-128.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-131.jpg',
    index: 131,
    thumb: 'thumbnails/M&D-131.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-132.jpg',
    index: 132,
    thumb: 'thumbnails/M&D-132.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-137.jpg',
    index: 137,
    thumb: 'thumbnails/M&D-137.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-140.jpg',
    index: 140,
    thumb: 'thumbnails/M&D-140.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-146.jpg',
    index: 146,
    thumb: 'thumbnails/M&D-146.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-149.jpg',
    index: 149,
    thumb: 'thumbnails/M&D-149.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-152.jpg',
    index: 152,
    thumb: 'thumbnails/M&D-152.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-158.jpg',
    index: 158,
    thumb: 'thumbnails/M&D-158.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-164.jpg',
    index: 164,
    thumb: 'thumbnails/M&D-164.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-172.jpg',
    index: 172,
    thumb: 'thumbnails/M&D-172.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-174.jpg',
    index: 174,
    thumb: 'thumbnails/M&D-174.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-182.jpg',
    index: 182,
    thumb: 'thumbnails/M&D-182.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-191.jpg',
    index: 191,
    thumb: 'thumbnails/M&D-191.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-227.jpg',
    index: 227,
    thumb: 'thumbnails/M&D-227.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-254.jpg',
    index: 254,
    thumb: 'thumbnails/M&D-254.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-259.jpg',
    index: 259,
    thumb: 'thumbnails/M&D-259.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-262.jpg',
    index: 262,
    thumb: 'thumbnails/M&D-262.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-266.jpg',
    index: 266,
    thumb: 'thumbnails/M&D-266.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-285.jpg',
    index: 285,
    thumb: 'thumbnails/M&D-285.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-287.jpg',
    index: 287,
    thumb: 'thumbnails/M&D-287.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-288.jpg',
    index: 288,
    thumb: 'thumbnails/M&D-288.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-291.jpg',
    index: 291,
    thumb: 'thumbnails/M&D-291.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-293.jpg',
    index: 293,
    thumb: 'thumbnails/M&D-293.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-296.jpg',
    index: 296,
    thumb: 'thumbnails/M&D-296.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-298.jpg',
    index: 298,
    thumb: 'thumbnails/M&D-298.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-299.jpg',
    index: 299,
    thumb: 'thumbnails/M&D-299.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-318.jpg',
    index: 318,
    thumb: 'thumbnails/M&D-318.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-322.jpg',
    index: 322,
    thumb: 'thumbnails/M&D-322.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-325.jpg',
    index: 325,
    thumb: 'thumbnails/M&D-325.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-327.jpg',
    index: 327,
    thumb: 'thumbnails/M&D-327.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-340.jpg',
    index: 340,
    thumb: 'thumbnails/M&D-340.jpg',
    width: 2500,
    height: 1669,
  },
  {
    src: 'M&D-345.jpg',
    index: 345,
    thumb: 'thumbnails/M&D-345.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-350.jpg',
    index: 350,
    thumb: 'thumbnails/M&D-350.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-355.jpg',
    index: 355,
    thumb: 'thumbnails/M&D-355.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-360.jpg',
    index: 360,
    thumb: 'thumbnails/M&D-360.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-361.jpg',
    index: 361,
    thumb: 'thumbnails/M&D-361.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-366.jpg',
    index: 366,
    thumb: 'thumbnails/M&D-366.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-374.jpg',
    index: 374,
    thumb: 'thumbnails/M&D-374.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-381.jpg',
    index: 381,
    thumb: 'thumbnails/M&D-381.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-385.jpg',
    index: 385,
    thumb: 'thumbnails/M&D-385.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-389.jpg',
    index: 389,
    thumb: 'thumbnails/M&D-389.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-391.jpg',
    index: 391,
    thumb: 'thumbnails/M&D-391.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-396.jpg',
    index: 396,
    thumb: 'thumbnails/M&D-396.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-398.jpg',
    index: 398,
    thumb: 'thumbnails/M&D-398.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-399.jpg',
    index: 399,
    thumb: 'thumbnails/M&D-399.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-404.jpg',
    index: 404,
    thumb: 'thumbnails/M&D-404.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-406.jpg',
    index: 406,
    thumb: 'thumbnails/M&D-406.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-410.jpg',
    index: 410,
    thumb: 'thumbnails/M&D-410.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-414.jpg',
    index: 414,
    thumb: 'thumbnails/M&D-414.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-417.jpg',
    index: 417,
    thumb: 'thumbnails/M&D-417.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-432.jpg',
    index: 432,
    thumb: 'thumbnails/M&D-432.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-437.jpg',
    index: 437,
    thumb: 'thumbnails/M&D-437.jpg',
    width: 2500,
    height: 3745,
  },
  {
    src: 'M&D-441.jpg',
    index: 441,
    thumb: 'thumbnails/M&D-441.jpg',
    width: 2500,
    height: 3745,
  },
];
