import { Routes } from '@angular/router';
import { HostingsComponent } from './pages/hostings/hostings.component';
import { WeddingDetailsComponent } from './pages/wedding-details.component';

export const routes: Routes = [
  { path: 'hebergements', component: HostingsComponent },
  { path: 'mariage', component: WeddingDetailsComponent },
];
