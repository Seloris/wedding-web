import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  styles: [
    `
      .active .line {
        display: block;
      }
    `,
  ],
  template: `<div class="flex h-36 flex-row justify-center">
    <div class="flex h-full flex-row items-center font-title">
      <img class="mr-16 h-24" src="assets/logo.svg" alt="logo" />
      @for (link of links(); track link.path) {
        <a
          class="relative m-5 text-2xl text-secondary"
          [routerLink]="link.path"
          routerLinkActive="active"
          ><span>{{ link.label }}</span>
          <div class="line absolute hidden h-[1px] w-7 bg-secondary"></div
        ></a>
      }
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = signal<Link[]>([
    { label: 'Le mariage', path: '/mariage' },
    { label: 'Les hébergements', path: '/hebergements' },
    { label: 'Rsvp', path: '/rsvp' },
    { label: 'La liste', path: '/notre-liste' },
    { label: 'Les photos', path: '/galerie' },
  ]);
}

type Link = { label: string; path: string };
