import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { filter } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private router = inject(Router);
  initFirebase() {
    const app = initializeApp({
      databaseURL: environment.url,
      measurementId: environment.gaKey,
      projectId: 'web-wedding-13d08',
      apiKey: environment.apiKey,
      appId: environment.appId,
    });
    const analytics = getAnalytics(app);

    logEvent(analytics, 'open', {
      page_location: this.router.url,
      page_path: this.router.url,
      page_title: this.router.url,
    });

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        logEvent(analytics, 'page_view', {
          page_location: ev.url,
          page_path: ev.url,
          page_title: ev.url,
        });
      });
  }
}
