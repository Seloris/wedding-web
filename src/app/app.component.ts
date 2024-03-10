import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { FooterComponent } from './shared/ui/footer.component';
import { HeaderComponent } from './shared/ui/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  styles: [
    `
      :host {
      }
    `,
  ],
  template: `<div class="relative flex h-full flex-col">
    <app-header></app-header>
    <main class="relative flex-1">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </div>`,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  animations: [],
})
export class AppComponent implements OnInit {
  renderer = inject(Renderer2);
  doc = inject(DOCUMENT);
  appService = inject(AppService);

  ngOnInit() {
    setTimeout(() => {
      this.renderer.addClass(this.doc.getElementById('splash'), 'opacity-0');
    }, 750);

    setTimeout(() => {
      this.renderer.removeChild(this.doc.body, this.doc.getElementById('splash'));
    }, 1750);

    this.appService.initFirebase();
  }
}
