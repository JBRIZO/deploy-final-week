import { Injectable } from '@angular/core';
import { IGetTokenResponse } from '../interfaces/get-token-reponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthLocalStorageService {
  setElement(name: string, value: any) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getElement(elementName: LocalStorageItems) {
    const element = localStorage.getItem(elementName);
    if (element) {
      return JSON.parse(element);
    } else {
      return null;
    }
  }
}

export type LocalStorageItems = 'expiresAt' | 'sessionId' | 'requestToken';
