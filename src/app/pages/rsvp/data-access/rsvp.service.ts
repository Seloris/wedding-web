import { Injectable, signal } from '@angular/core';
import { RequestStatus } from '../models/request-status';
import { RsvpFormData } from '../models/rsvp-data';

import { child, getDatabase, push, ref, update } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  status = signal<{ value: RequestStatus; error?: any }>({ value: 'idle' });

  async postData(data: RsvpFormData) {
    if (this.status().value === 'loading') return;

    this.status.set({ value: 'loading' });

    const db = getDatabase();
    const newKey = push(child(ref(db), 'forms')).key;

    const updates = {
      ['/forms/' + newKey]: data,
    };

    try {
      await update(ref(db), updates);
      setTimeout(() => this.status.set({ value: 'success' }), 500);
    } catch (err: any) {
      this.status.set({ value: 'error', error: err });
    }
  }
}
