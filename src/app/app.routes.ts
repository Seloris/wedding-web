import { Routes } from '@angular/router';
import { HostingsComponent } from './pages/hostings/hostings.component';
import { ListComponent } from './pages/list';
import { PhotosComponent } from './pages/photos';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { WeddingDetailsComponent } from './pages/wedding-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/mariage', pathMatch: 'full' },
  { path: 'hebergements', component: HostingsComponent },
  { path: 'mariage', component: WeddingDetailsComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'notre-liste', component: ListComponent },
  { path: 'galerie', component: PhotosComponent },
];
