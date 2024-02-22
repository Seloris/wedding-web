import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/ui/footer.component';
import { HeaderComponent } from './shared/ui/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  styles: [``],
  template: `<div class="flex h-full flex-col">
    <app-header> </app-header>
    <main class="flex-1 pb-6">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </div>`,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {
  title = 'wedding-web';
}
