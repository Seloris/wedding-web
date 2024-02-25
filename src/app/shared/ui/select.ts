import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from '../models/option';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
    }
  `,
  template: `<div
    class="-mx-4 flex flex-row items-start"
    [ngClass]="{ 'text-2xl': mode === 'main', 'text-xl text-secondary': mode === 'alt' }"
  >
    @for (f of options; track selected) {
      <button
        class="relative mx-3 p-2"
        [ngClass]="{ 'opacity-100': f.value === selected, 'opacity-50': f.value !== selected }"
        (click)="optionChange.emit(f.value)"
      >
        <span>{{ f.label }}</span>
        @if (f.value === selected && mode === 'main') {
          <div class="absolute h-[1px] w-6 bg-primary"></div>
        }
      </button>
    }
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input({ required: true }) selected!: any;
  @Input({ required: true }) options: Option<any>[] = [];
  @Input() mode: 'main' | 'alt' = 'main';
  @Output() optionChange = new EventEmitter<any>();
}
