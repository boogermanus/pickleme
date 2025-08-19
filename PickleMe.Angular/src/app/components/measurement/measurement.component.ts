import {Component, input, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-measurement',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './measurement.component.html',
  styleUrl: './measurement.component.scss'
})
export class MeasurementComponent {
  value = input<number>(0);
  @Input() ingredient: string = '';
  @Input() measurement: string = 'cups';
}
