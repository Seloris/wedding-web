import { Routes } from '@angular/router';
import { HostingsComponent } from './pages/hostings/hostings.component';
import { WeddingDetailsComponent } from './pages/wedding-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/mariage', pathMatch: 'full' },
  { path: 'hebergements', component: HostingsComponent },
  { path: 'mariage', component: WeddingDetailsComponent },
];
