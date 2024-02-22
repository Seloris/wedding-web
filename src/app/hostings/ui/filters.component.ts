import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HostingType } from '../models/hosting';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
    }
  `,
  template: `<div class="-mx-4 flex flex-row ">
    @for (f of allFilters; track filter) {
      <button
        class="mx-4 p-4 text-2xl"
        [ngClass]="{ 'opacity-100': f.value === filter, 'opacity-50': f.value !== filter }"
        (click)="filtersChange.emit(f.value)"
      >
        {{ f.label }}
      </button>
    }
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  @Input({ required: true }) filter!: HostingType;
  @Output() filtersChange = new EventEmitter<HostingType>();

  allFilters: Option<HostingType>[] = [
    { label: 'Les hôtels', value: 'hotel' },
    { label: 'Les gîtes', value: 'cottage' },
    { label: 'Les maisons (6 à 8 pers.)', value: 'house' },
  ];
}

type Option<T> = { label: string; value: T };
