import { Component,OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {    
  loginForm: FormGroup;
  showPassword: boolean = false;
  userData: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.userData = this.authService.getUserData();
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  private setLoginState(userData: any) {
    // Store in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));

    // Set cookie that expires in 7 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    document.cookie = `isLoggedIn=true; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = `userData=${JSON.stringify(userData)}; expires=${expirationDate.toUTCString()}; path=/`;

    // Update auth service state
    this.authService.updateLoginState(true);
  }

  onSubmit() {
    const userData = this.authService.getUserData();
    if (userData) {
      this.router.navigate(['/dashboard']);
      return;
    }

    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            // Store login state and user data with UID
            this.setLoginState({
              email: this.loginForm.value.email,
              uid: response.uid,
              timestamp: new Date().toISOString()
            });

            this.snackBar.open('Login successful!', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['snackbar-container'],
            });
            this.router.navigate(['/dashboard']);
          } else if (response.status === 'error' && response.message === 'Invalid Password !') {
            this.snackBar.open('Invalid Password!', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['snackbar-error'],
            });
            // Clear only the password field
            this.loginForm.get('password')?.reset();
          }
        },
        error: (error) => {
          let errorMessage = 'Login failed. Please try again.';
          if (error.error?.message) {
            errorMessage = error.error.message;
          }
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['snackbar-error'],
          });
        }
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


}
