import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DotsComponent } from '../shared/ui/dots.component';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-wedding-details',
  standalone: true,
  template: `<app-page>
    <img
      class="mb-12 hidden h-72 w-full object-cover sm:block lg:h-96"
      src="assets/images/herponcey-wide.jpg"
      alt="Château d'Herponcey"
    />
    <img
      class="mx-auto mb-12 block aspect-video max-w-full object-cover sm:hidden"
      src="assets/images/herponcey-16-9.jpg"
      alt="Château d'Herponcey"
    />
    <h1 class="text-center">Le mariage</h1>
    <div
      class="flex flex-col items-center justify-center text-center lg:flex-row-reverse lg:items-start lg:overflow-hidden lg:rounded-xl lg:bg-white lg:text-left"
    >
      <div class="flex flex-col lg:mx-12 lg:my-8 lg:flex-1">
        <h2 class="">La cérémonie religieuse</h2>
        <p>
          À 16h30 commence la cérémonie religieuse <br class="hidden lg:block" />
          à l'église Saint-Germain de Rugles.
        </p>
        <p>Place Foch, 27250 Rugles</p>
      </div>
      <iframe
        class="mt-3 h-96 w-full max-w-full lg:mt-0 lg:max-w-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572.000543710112!2d0.7096360973022776!3d48.82262213805969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e178935640ccc9%3A0xa02ee9c4c148315f!2s%C3%89glise%20Saint-Germain%20de%20Rugles!5e0!3m2!1sfr!2sfr!4v1708878941482!5m2!1sfr!2sfr"
        allowfullscreen=""
        loading="lazy"
        (load)="myLoadEvent()"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <app-dots class="mx-auto my-6" [amount]="3"></app-dots>
    <div
      class="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:overflow-hidden lg:rounded-xl lg:bg-white lg:text-left"
    >
      <div class="flex flex-col lg:mx-12 lg:my-8 lg:flex-1">
        <h2 class="">La réception</h2>

        <p class="">
          Puis nous nous retrouverons au Château d'Herponcey pour le cocktail et le dîner.
        </p>
        <p class="italic">
          Attention, le château d'Herponcey n'est pas répertorié sur Google Maps, uniquement le
          village d'Herponcey l'est. <br />
          Vous trouverez ci-dessous les coordonnées exactes ainsi que l'entrée du chemin pour y
          accéder.
        </p>
      </div>

      <iframe
        class="mt-3 h-96 w-full max-w-full lg:mt-0 lg:max-w-lg"
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
export class WeddingDetailsComponent {
  myLoadEvent() {
    console.log('toto');
  }
}
