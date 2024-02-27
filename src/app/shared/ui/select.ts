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
    class="-mx-4 flex flex-row flex-wrap items-start"
    [ngClass]="{
      'text-lg lg:text-xl': mode === 'main',
      'text-md text-secondary lg:text-lg': mode === 'alt'
    }"
  >
    @for (f of options; track selected) {
      <button
        class="relative mx-1 p-2 text-left lg:mx-3"
        [ngClass]="{
          'font-semibold opacity-100': f.value === selected,
          'opacity-70': f.value !== selected
        }"
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
