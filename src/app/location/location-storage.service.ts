import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocationStorageService {

  constructor(
    private localStorage: LocalStorageService,
  ) { }

  /**
   * 
   * @param code string to store
   */
  addCode(code: string) {}

  getAllCodes(): string[] {
    return [];
  }

  /**
   * 
   * @param code 
   * @returns false if code was not present, true otherwise
   */
  removeCode(code: string): boolean {
    return false;
  }

  removeAllCodes() {}
}
