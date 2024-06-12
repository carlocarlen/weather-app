import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocationStorageService {
  static readonly CODES = "CODES";
  static readonly SEP = ",";

  constructor(
    private localStorage: LocalStorageService,
  ) { }

  /**
   * 
   * @param code string to store
   */
  addCode(code: string) {
    let allCodes: string[] = this.getAllCodes();
    allCodes.push(code);
    this.localStorage.setItem(LocationStorageService.CODES, this.arrayToString(allCodes));
  }

  getAllCodes(): string[] {
    const stored: string = this.localStorage.getItem(LocationStorageService.CODES) ?? "";
    return this.stringToArray(stored);
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

  private stringToArray(input: string): string[] {
    return input.split(LocationStorageService.SEP);
  }

  private arrayToString(input: string[]): string {
    return input.join(LocationStorageService.SEP);
  }
}
