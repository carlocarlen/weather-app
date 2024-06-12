import { Component, OnInit } from '@angular/core';
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

  storedCodes = new Set<string>();
  
  constructor(
    private locationStorage: LocationStorageService,
  ) {}

  ngOnInit(): void {
    this.storedCodes = this.locationStorage.getAllCodes();
  }

  onSubmit() {
    console.log(`Submitted zip code ${this.zipCode}`);
    this.submittedCodes.push(this.zipCode);
    // TODO make this reactive!
    this.locationStorage.addCode(this.zipCode);
    this.storedCodes = this.locationStorage.getAllCodes();
  }

}
