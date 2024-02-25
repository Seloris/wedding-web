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
      height: 100%;
    }
  `,
  template: ` <a
    [href]="hosting.url"
    target="_blank"
    class="flex h-full flex-row rounded-md bg-primaryLighter transition-all hover:scale-[101%] hover:cursor-pointer"
  >
    <img
      class="aspect-square w-60 max-w-60 rounded-l-md object-cover"
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
        {{ hosting.address.city }}
      </div>
      <div class="italic">À {{ hosting.distanceKM }} km d'Herponcey</div>
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
