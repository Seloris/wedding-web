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
  template: `<div
    class="flex h-28 flex-row items-center justify-between p-3 px-6 font-title lg:h-36 lg:justify-center lg:p-6"
  >
    <div class="w-12 lg:hidden"></div>
    <img class="h-24 lg:h-28" src="assets/logo.svg" alt="logo" />

    <!-- Desktop -->
    <div class="ml-16 hidden flex-row items-center bg-background font-title lg:flex">
      @for (link of links(); track $index) {
        @if (link.path) {
          <a
            class="relative m-5 text-2xl text-secondary"
            [routerLink]="link.path"
            routerLinkActive="active"
            ><span>{{ link.label }}</span>
            <div class="line absolute hidden h-[1px] w-7 bg-secondary"></div
          ></a>
        } @else if (link.externalLink) {
          <a class="relative m-5 text-2xl text-secondary" [href]="link.externalLink" target="_blank"
            ><span>{{ link.label }}</span>
            <div class="line absolute hidden h-[1px] w-7 bg-secondary"></div
          ></a>
        }
      }
    </div>

    <!-- Mobile -->
    @if (isOpened()) {
      <div
        class="absolute bottom-0 left-0 right-0 top-0 z-10 backdrop-blur-sm"
        aria-hidden="true"
        (click)="closeDrawer()"
      ></div>
      <div
        class="absolute right-2 top-24 z-20 ml-16 flex animate-fade-in flex-col items-center rounded-md bg-background font-title shadow-md lg:hidden"
      >
        @for (link of links(); track $index) {
          @if (link.path) {
            <a
              class="relative m-5 text-2xl text-secondary"
              [routerLink]="link.path"
              routerLinkActive="active"
              (click)="closeDrawer()"
              ><span>{{ link.label }}</span>
              <div class="line absolute hidden h-[1px] w-7 bg-secondary"></div
            ></a>
          } @else if (link.externalLink) {
            <a
              class="relative m-5 text-2xl text-secondary"
              [href]="link.externalLink"
              target="_blank"
              (click)="closeDrawer()"
              ><span>{{ link.label }}</span>
              <div class="line absolute hidden h-[1px] w-7 bg-secondary"></div
            ></a>
          }
        }
      </div>
    }

    @if (isOpened()) {
      <img
        class="z-20 w-10 hover:cursor-pointer lg:hidden"
        src="assets/close.svg"
        alt="close"
        aria-hidden="true"
        (click)="isOpened.set(!isOpened())"
      />
    } @else {
      <img
        class="z-20 w-10 hover:cursor-pointer lg:hidden"
        src="assets/menu.svg"
        alt="menu"
        aria-hidden="true"
        (click)="isOpened.set(!isOpened())"
      />
    }
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isOpened = signal(false);
  links = signal<Link[]>([
    { label: 'Le mariage', path: '/mariage' },
    { label: 'Les hébergements', path: '/hebergements' },
    {
      label: 'Notre liste',
      externalLink: 'https://www.millemercismariage.com/daniel-madeleine/liste.html',
    },
    { label: 'Les photos', path: '/galerie' },
  ]);

  closeDrawer() {
    this.isOpened.set(false);
  }
}

type Link = { label: string; path?: string; externalLink?: string };
