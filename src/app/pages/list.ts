import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `<app-page>
    <h1 class="text-center">Notre liste</h1>
    <p class="text-center">
      Lorem Elsass ipsum ac turpis, réchime kougelhopf munster gewurztraminer ornare id vielmols,
      jetz gehts los eleifend pellentesque id, kuglopf hopla Racing. libero, quam, libero. sit
      tellus leverwurscht risus, leo placerat dui schpeck bissame Hans knepfle Pfourtz ! sit hop
      Strasbourg mänele hopla DNA
    </p>
    <a
      class="mx-auto mt-8 rounded-md border bg-secondary px-4 py-2 text-white opacity-80 transition-opacity hover:opacity-100"
      href="https://www.millemercismariage.com/daniel-madeleine/liste.html"
      target="_blank"
    >
      Accéder à la liste de mariage
    </a>
  </app-page>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageComponent],
})
export class ListComponent {}
