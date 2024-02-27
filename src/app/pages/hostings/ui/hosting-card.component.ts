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
      display: block;
      @apply lg:h-full;
      height: 100%;
    }
  `,
  template: ` <a
    [href]="hosting.url"
    target="_blank"
    class="flex max-w-xl flex-row flex-wrap rounded-md bg-primaryLighter transition-all hover:scale-[101%] hover:cursor-pointer"
  >
    <img
      class="aspect-square w-40 max-w-40 rounded-l-md object-cover sm:w-48 sm:max-w-48 lg:w-60 lg:max-w-60"
      [src]="'assets/images/' + hosting.image"
      [alt]="hosting.title"
    />
    <div class="flex h-full flex-1 flex-col p-5 text-sm">
      <div class="font-medium">
        <span class="text-lg"
          >{{ hosting.title }}
          @if (hosting.type === 'hotel' && hosting.stars !== undefined) {
            <app-stars class="ml-2" [stars]="hosting.stars"></app-stars>
          }
        </span>
      </div>
      <div>
        Prix : <span class="font-semibold">{{ hosting.priceRange | priceRange }}</span>
      </div>
      <br />
      <div>
        @if (hosting.address.street) {
          {{ hosting.address.street }},
        }
        {{ hosting.address.city }} &ndash;
        <span class="italic">À {{ hosting.distanceKM }}&nbsp;km d'Herponcey</span>
      </div>
      @if (hosting.description) {
        <br />
        <div class="italic">{{ hosting.description }}</div>
      }
    </div>
  </a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PriceRangePipe, StarPipe, StarsComponent],
})
export class HostingCardComponent {
  @Input({ required: true }) hosting!: Hosting;
}
