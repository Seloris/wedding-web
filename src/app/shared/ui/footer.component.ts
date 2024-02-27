import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
    }
  `,
  template: `<div class="f flex flex-col items-center justify-center p-8">
    <img class="mb-4 h-6" src="assets/separator.svg" alt="sepator" />
    <div class="text-secondary">© 2024 par Daniel & Madeleine &dash; 1.1</div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
