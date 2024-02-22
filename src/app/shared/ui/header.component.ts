import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  styles: [
    `
      .active {
        text-decoration: underline;
      }
    `,
  ],
  template: `<div class="flex h-36 flex-row justify-center">
    <div class="flex h-full flex-row items-center ">
      <img class="mr-16 h-24" src="assets/logo.svg" alt="logo" />
      @for (link of links(); track link.path) {
        <a
          class="font m-5 text-xl text-secondary"
          [routerLink]="link.path"
          routerLinkActive="active"
          >{{ link.label }}</a
        >
      }
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = signal<Link[]>([
    { label: 'Le mariage', path: '/mariage' },
    { label: 'Hébergements', path: '/hebergements' },
    { label: 'Notre liste', path: '/notre-liste' },
    { label: 'Galerie', path: '/galerie' },
    { label: 'Contact', path: '/contact' },
  ]);
}

type Link = { label: string; path: string };
