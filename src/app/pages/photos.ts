import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-photos',
  standalone: true,
  template: `<app-page>
    <h1 class="text-center">Galerie de photos</h1>
    <p class="text-center">Aucune photo pour le moment...</p>
  </app-page>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageComponent],
})
export class PhotosComponent {}
