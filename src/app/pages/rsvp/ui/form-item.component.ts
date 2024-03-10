import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex flex-col">
    <div class="text-md font-medium">{{ label }}</div>

    <div class="mt-2">
      <ng-content></ng-content>
    </div>
  </div>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormItemComponent {
  @Input() label!: string;
}
