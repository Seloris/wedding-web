import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Option } from '../../shared/models/option';
import { PageComponent } from '../../shared/ui/page.component';
import { SelectComponent } from '../../shared/ui/select';
import { HostingsService } from './data-access/hostings.service';
import { HostingSort as HostingSortType, HostingType } from './models/hosting';
import { HostingCardComponent } from './ui/hosting-card.component';

@Component({
  selector: 'app-hostings',
  standalone: true,
  styles: `
    :host {
      display: block;
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
    }
  `,
  template: `
    <app-page>
      <h1>Les hébergements</h1>
      <p class="text-center">
        Voici quelques suggestions d'hébergements pour votre séjour en Normandie.<br /><br />
        Pour chaque hébergement, vous trouverez une fourchette de prix indicatifs (de € à €€€) ainsi
        que la distance par rapport au lieu de réception. Les prix indiqués ont été relevés en
        février 2024.
        <br /><br />
        Au clic, vous serez redirigé vers un des sites qui proposent l'hébergement. <br />Ils sont
        parfois disponibles sur plusieurs plateformes.
      </p>
      <app-select
        class="mt-6"
        [selected]="hostingsService.filter()"
        [options]="filtersOptions"
        (optionChange)="setFilter($event)"
      ></app-select>
      <app-select
        class=""
        mode="alt"
        [selected]="hostingsService.sort()"
        [options]="sortOptions"
        (optionChange)="setSort($event)"
      ></app-select>
      <div class="mt-14 grid flex-wrap items-center justify-center gap-8">
        @for (hosting of hostingsService.filteredHostings(); track hosting.title) {
          <app-hosting-card class="" [hosting]="hosting"></app-hosting-card>
        }
      </div>
    </app-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HostingCardComponent, SelectComponent, PageComponent],
})
export class HostingsComponent {
  hostingsService = inject(HostingsService);

  filtersOptions: Option<HostingType>[] = [
    { label: 'Les hôtels', value: 'hotel' },
    { label: 'Les gîtes', value: 'cottage' },
    { label: 'Les maisons (6 à 8 pers.)', value: 'house' },
  ];

  sortOptions: Option<HostingSortType>[] = [
    { label: 'les plus proches du lieu de réception', value: 'kmAsc' },
    { label: 'par prix croissants', value: 'priceAsc' },
    { label: 'par prix décroissants', value: 'priceDesc' },
  ];

  setFilter(filter: HostingType) {
    this.hostingsService.filter.set(filter);
  }

  setSort(sort: HostingSortType) {
    this.hostingsService.sort.set(sort);
  }
}
