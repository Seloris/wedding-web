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
    <div class="text-secondary">Daniel & Madeleine <span class="text-xs">&dash; 1.0.8</span></div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
