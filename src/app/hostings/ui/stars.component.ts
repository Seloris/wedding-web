import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex flex-row text-primary">
    @for (star of [].constructor(stars); track star) {
      <img class="w-4 text-red-400" src="assets/star.svg" alt="star" />
    }
  </div>`,
  styles: `
    :host {
      display: inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarsComponent {
  @Input({ required: true }) stars!: number;
}
