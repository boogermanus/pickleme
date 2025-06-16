import {Component, inject} from '@angular/core';
import {PickleMeStore} from '../Stores/PickleMeStore';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [PickleMeStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  store = inject(PickleMeStore);
  constructor() {
  }

  onCupsChange(cups: number): void {
    this.store.cups()
  }
}
