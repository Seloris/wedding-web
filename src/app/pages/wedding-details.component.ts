import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DotsComponent } from '../shared/ui/dots.component';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-wedding-details',
  standalone: true,
  template: `<app-page>
    <img
      class="mb-12 hidden h-72 w-full object-cover sm:block xl:h-96"
      src="assets/images/herponcey.jpg"
      alt="Château d'Herponcey"
    />
    <img
      class="mx-auto mb-12 block aspect-video max-w-full object-cover sm:hidden"
      src="assets/images/herponcey.jpg"
      alt="Château d'Herponcey"
    />
    <h1 class="text-center">Le mariage</h1>
    <div
      class="flex flex-col items-center justify-center text-center xl:flex-row-reverse xl:items-start xl:overflow-hidden xl:rounded-xl xl:bg-white xl:text-left"
    >
      <div class="flex flex-col xl:mx-12 xl:my-8 xl:flex-1">
        <h2 class="">La cérémonie religieuse</h2>
        <p>
          À 16h30 commence la cérémonie religieuse <br class="hidden xl:block" />
          à l'église Saint-Germain de Rugles, Place Foch.
        </p>
        <p>
          Pour stationner à Rugles : la petite place de l'église sera réservée aux mariés et à leurs
          parents, mais vous trouverez différents parking à proximité dont certains indiqués sur la
          carte.
        </p>
      </div>
      <iframe
        class="mt-3 h-96 w-full max-w-full xl:mt-0 xl:max-w-lg"
        src="https://www.google.com/maps/d/u/0/embed?mid=1SujMwO3DWVg4oWTYF-2VMIJ5snd9l7A&ehbc=2E312F&noprof=1&z=17"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <app-dots class="mx-auto my-6" [amount]="3"></app-dots>
    <div
      class="flex flex-col items-center justify-center text-center xl:flex-row xl:items-start xl:overflow-hidden xl:rounded-xl xl:bg-white xl:text-left"
    >
      <div class="flex flex-col xl:mx-12 xl:my-8 xl:flex-1">
        <h2 class="">La réception</h2>

        <p class="">
          Après la cérémonie religieuse, nous nous retrouverons chez Pierre et Edmée. Le château
          d'Herponcey se trouve à 4 km de Rugles, sur la D830 qui mène de Rugles vers L'Aigle.
        </p>
        <p class="italic">
          Attention, le château d'Herponcey n'est pas répertorié sur Google Maps, ses coordoonées
          GPS sont : <span class="whitespace-nowrap font-medium">48.79835, 0.69436</span>
        </p>
      </div>

      <iframe
        class="mt-3 h-96 w-full max-w-full xl:mt-0 xl:max-w-lg"
        src="https://www.google.com/maps/d/embed?mid=1W-d-KcUZAFLbva9vsj1OvWsowMWirZc&ehbc=2E312F&noprof=1&z=15"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </app-page>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageComponent, DotsComponent],
})
export class WeddingDetailsComponent {}
