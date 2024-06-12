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

  addCode(code: string) {
    let newCodes: Set<string> = this.getAllCodes().add(code);
    this.localStorage.setItem(LocationStorageService.CODES, this.setToString(newCodes));
  }

  getAllCodes(): Set<string> {
    const stored: string = this.localStorage.getItem(LocationStorageService.CODES) ?? "";
    return this.stringToSet(stored);
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

  private stringToSet(input: string): Set<string> {
    return input.length == 0 ? new Set<string>() : new Set<string>(input.split(LocationStorageService.SEP));
  }

  private setToString(input: Set<string>): string {
    return Array.from(input).join(LocationStorageService.SEP);
  }
}
