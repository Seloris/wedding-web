import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HostingsService } from './data-access/hostings.service';
import { HostingType } from './models/hosting';
import { FiltersComponent } from './ui/filters.component';
import { HostingCardComponent } from './ui/hosting-card.component';

@Component({
  selector: 'app-hostings',
  standalone: true,
  styles: `
    :host {
      display: block;
    }

    .grid {
      grid-template-columns: repeat(auto-fill, minmax(520px, 600px));
    }
  `,
  template: `
    <div class="m-auto mx-24 mt-12">
      <div class="text-xl">Quelques suggestions d'hébergements pour votre séjour en Normandie.</div>
      <div class="mt-6">
        <app-filters
          [filter]="hostingsService.filter()"
          (filtersChange)="setFilter($event)"
        ></app-filters>
      </div>
      <div class="mt-8 grid flex-wrap items-center justify-center gap-8">
        @for (hosting of hostingsService.filteredHostings(); track hosting.title) {
          <app-hosting-card class="" [hosting]="hosting"></app-hosting-card>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HostingCardComponent, FiltersComponent],
})
export class HostingsComponent {
  hostingsService = inject(HostingsService);

  setFilter(filter: HostingType) {
    this.hostingsService.filter.set(filter);
  }
}
