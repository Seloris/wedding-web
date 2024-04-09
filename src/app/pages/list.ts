import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `<app-page>
    <h1 class="text-center">Notre liste</h1>
    <a
      class="mx-auto mt-8 rounded-md border bg-secondary px-4 py-2 text-white opacity-80 transition-opacity hover:opacity-100"
      href="https://www.millemercismariage.com/daniel-madeleine/liste.html"
      target="_blank"
    >
      Accéder à la liste de mariage
    </a>
  </app-page>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageComponent],
})
export class ListComponent {}
