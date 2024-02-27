import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hosting } from '../models/hosting';
import { PriceRangePipe, StarPipe } from '../utils/price-range.pipe';
import { StarsComponent } from './stars.component';

@Component({
  selector: 'app-hosting-card',
  standalone: true,
  styles: `
    :host {
      display: flex;
      align-self: stretch;
    }
  `,
  template: ` <a
    [href]="hosting.url"
    target="_blank"
    class="flex max-w-xl flex-1 flex-col overflow-hidden rounded-md bg-primaryLighter transition-all hover:scale-[101%] hover:cursor-pointer lg:flex-row"
  >
    <img
      class="aspect-video object-cover lg:aspect-square lg:w-48 lg:max-w-60"
      [src]="'assets/images/' + hosting.image"
      [alt]="hosting.title"
    />
    <div class="mx-5 my-4 flex flex-1 flex-col text-sm">
      <div class="text-xl font-medium">
        {{ hosting.title }}
        @if (hosting.type === 'hotel' && hosting.stars !== undefined) {
          <app-stars class="ml-2" [stars]="hosting.stars"></app-stars>
        }
      </div>
      <div class="mt-1">
        Prix : <span class="font-semibold">{{ hosting.priceRange | priceRange }}</span>
      </div>
      <div class="mt-2">
        @if (hosting.address.street) {
          {{ hosting.address.street }},
        }
        {{ hosting.address.city }} &ndash;
        <span>À {{ hosting.distanceKM }}&nbsp;km d'Herponcey</span>
      </div>
      @if (hosting.description) {
        <div class="mt-2 italic">{{ hosting.description }}</div>
      }
    </div>
  </a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PriceRangePipe, StarPipe, StarsComponent],
})
export class HostingCardComponent {
  @Input({ required: true }) hosting!: Hosting;
}
