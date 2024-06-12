import { Component, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStorageService } from '../location-storage.service';

@Component({
  selector: 'wth-location-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.css'
})
export class LocationFormComponent implements OnInit {

  zipCode: string = "";

  submittedCodes: string[] = [];

  storedCodes: Signal<Set<string>>

  constructor(
    private locationStorage: LocationStorageService,
  ) {
    this.storedCodes = locationStorage.storedCodes
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`Submitted zip code ${this.zipCode}`);
    this.submittedCodes.push(this.zipCode);
    this.locationStorage.addCode(this.zipCode);
  }

}
