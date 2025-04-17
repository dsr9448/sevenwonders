import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoginState());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {}

  private checkLoginState(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUserData(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  logout() {
    // Clear localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');

    // Clear cookies
    document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Update login state
    this.isLoggedInSubject.next(false);
  }

  updateLoginState(isLoggedIn: boolean) {
    this.isLoggedInSubject.next(isLoggedIn);
  }
} 