import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dots',
  standalone: true,
  imports: [CommonModule],
  template: ` @for (i of [].constructor(amount); track i) {
    <div class="m-2 h-2 w-2 rounded-full bg-primary opacity-35"></div>
  }`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotsComponent {
  @Input({ required: true }) amount = 3;
}
