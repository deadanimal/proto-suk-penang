import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken(title: string): String {
    return localStorage.getItem(title);
  }

  saveToken(title: string, token: string) {
    localStorage.setItem(title, token);
  }

  destroyToken(title: string) {
    localStorage.removeItem(title);
  }

}
