import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `<app-page>
    <h1 class="text-center">Notre liste</h1>
    <p class="text-center">⚒ En cours de réalisation ⚒</p>
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
