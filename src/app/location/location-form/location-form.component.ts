import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wth-location-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.css'
})
export class LocationFormComponent {

  zipCode: string = "";

  onSubmit() {
    console.log(`Submitted zip code ${this.zipCode}`);
  }

}
