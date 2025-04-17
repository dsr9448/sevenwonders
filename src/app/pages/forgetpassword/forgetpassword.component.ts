import { Component, OnInit } from '@angular/core';
import { ProductbreadcrumbComponent } from "../../shared/productbreadcrumb/productbreadcrumb.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-forgetpassword',
  imports: [CommonModule, ProductbreadcrumbComponent, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private snackBar: MatSnackBar, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onResetPassword() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      this.apiService.resetPassword(email).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.snackBar.open('Password reset link sent to your email. Please check your inbox and spam folder.', 'Close', {
              duration: 5000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['snackbar-container'],
            });
            this.router.navigate(['/signin']);
          } else {
            this.snackBar.open(response.message || 'Failed to send reset password link', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['snackbar-error'],
            });
          }
        },
        error: (error) => {
          this.snackBar.open('Failed to send reset password link. Please try again.', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['snackbar-error'],
          });
        }
      });
    }
  }
}