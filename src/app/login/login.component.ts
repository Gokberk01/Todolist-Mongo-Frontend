import { Component, OnInit } from '@angular/core';
import { authServiceService } from '../services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenServiceService } from '../services/token-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';
  errorMessage: string = '';

  constructor(
    private authService: authServiceService,
    private tokenService: TokenServiceService,
    private router: Router
  ) {}

  login() {
    const loginDto = {
      UserEmail: this.userEmail,
      UserPassword: this.userPassword,
    };

    this.authService.login(loginDto).subscribe({
      next: (response) => {
        // Tokenları yakalama ve saklama
        const jwtToken = response.token;
        const refreshToken = response.refreshToken;
        console.log('Login successful');

        this.tokenService.setJwtToken(jwtToken);
        this.tokenService.setRefreshToken(refreshToken);


        //BU ALTTAKİ SİLİNECEK
        this.authService.setLoggedIn(true);

        this.router.navigate(['home']);
      },
      error: (error) => {
        this.errorMessage = error.error.message || 'Login failed';
      },
    });
  }
}
