import { Pipe, type PipeTransform } from '@angular/core';
import { HostingPriceRange } from '../models/hosting';

@Pipe({
  name: 'priceRange',
  standalone: true,
})
export class PriceRangePipe implements PipeTransform {
  transform(value: HostingPriceRange): unknown {
    return '€'.repeat(value);
  }
}

@Pipe({
  name: 'stars',
  standalone: true,
})
export class StarPipe implements PipeTransform {
  transform(value: number): unknown {
    return '🌟'.repeat(value);
  }
}
