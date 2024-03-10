import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageComponent } from '../../shared/ui/page.component';
import { RsvpService } from './data-access/rsvp.service';
import { FormItemComponent } from './ui/form-item.component';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  template: `<app-page>
    <h1 class="text-center">Réponse à l'invitation</h1>

    @if (rsvpService.status().value === 'success') {
      <div class="mx-auto flex animate-fade-in flex-col items-center text-xl">
        <img alt="OK" class="h-12 w-12" src="assets/checkmark.svg" />
        <p class="mt-4">Merci ! Votre réponse a bien été envoyée.</p>
      </div>
    } @else {
      <form
        [formGroup]="form"
        (ngSubmit)="submitForm()"
        class="m-auto flex w-full max-w-3xl flex-col items-stretch rounded-md bg-primaryLighter p-8"
      >
        <app-form-item class="mt-4 flex-1" label="Vos noms et prénoms">
          <input
            class="w-full rounded-md"
            [ngClass]="{
              'border border-red-600': form.get('persons')?.invalid && form.get('persons')?.dirty
            }"
            formControlName="persons"
          />
          @if (form.get('persons')?.invalid && form.get('persons')?.dirty) {
            <div class="text-md mt-2 italic text-red-600">Merci de renseigner le champ.</div>
          }
        </app-form-item>
        <div class="mt-6 flex flex-row items-center">
          <input
            class="mr-4 min-h-5 min-w-5 accent-primary"
            type="radio"
            id="present"
            formControlName="response"
            value="true"
            checked
          />
          <label for="present">Oui, avec plaisir !</label>
        </div>
        <div class="mt-2 flex flex-row items-center">
          <input
            class="mr-4 min-h-5 min-w-5 accent-primary"
            type="radio"
            id="notpresent"
            formControlName="response"
            value="false"
            checked
          />
          <label for="notpresent">Non, avec regret !</label>
        </div>
        @if (form.get('response')?.invalid && form.get('response')?.dirty) {
          <div class="text-md mt-2 italic text-red-600">Veuillez sélectionner une réponse.</div>
        }
        <app-form-item
          class="mt-6 flex-1"
          label="Commentaires (remarques, spécificités alimentaires, etc.)"
        >
          <textarea
            class="row w-full resize-none rounded-md"
            rows="4"
            formControlName="comments"
          ></textarea>
        </app-form-item>

        <div class="relative mx-auto mt-10 flex flex-col items-center">
          @if (rsvpService.status().value === 'loading') {
            <div class="absolute -top-9 left-1/2 -translate-x-1/2">
              <img
                class="animate-rotate-infinite  inline-block h-6 w-6 origin-center"
                alt="loading"
                src="assets/loading.svg"
              />
            </div>
          }
          <button
            type="submit"
            class="rounded-md border bg-primary px-4 py-2 text-white opacity-80 transition-opacity hover:opacity-100"
          >
            Envoyer les informations
          </button>

          @if (rsvpService.status().value === 'error') {
            <div class="mt-8 w-full text-red-600">
              Une erreur est survenue, veuillez réessayer plus tard 😭.
            </div>
          }
        </div>
      </form>
    }
  </app-page>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageComponent, ReactiveFormsModule, FormItemComponent],
})
export class RsvpComponent {
  rsvpService = inject(RsvpService);
  fb = inject(FormBuilder);

  form = this.fb.group({
    persons: this.fb.nonNullable.control('', [Validators.required]),
    response: this.fb.control(null, [Validators.required]),
    comments: this.fb.nonNullable.control(''),
  });

  async submitForm() {
    if (this.form.invalid) {
      const persons = this.form.get('persons')!;
      persons.markAsDirty();
      persons.updateValueAndValidity();

      const response = this.form.get('response')!;
      response.markAsDirty();
      response.updateValueAndValidity();

      return;
    }

    await this.rsvpService.postData({
      comments: this.form.value.comments!,
      persons: this.form.value.persons!,
      response: this.form.value.response!,
      sentAt: new Date(),
    });
    // .subscribe();
  }
}
