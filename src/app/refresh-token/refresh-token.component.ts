import { Component } from '@angular/core';
import { TokenServiceService } from '../services/token-service.service';
import { authServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-refresh-token',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './refresh-token.component.html',
  styleUrl: './refresh-token.component.css',
})
export class RefreshTokenComponent {
  errorMessage: string = '';

  constructor(
    private tokenService: TokenServiceService,
    private authService: authServiceService,
    private router: Router
  ) {}

  refreshToken() {
    const tokenRequestDto = {
      AccessToken: this.tokenService.getJwtToken(),
      RefreshToken: this.tokenService.getRefreshToken(),
    };

    this.authService.refreshToken(tokenRequestDto).subscribe({
      next: (response) => {
        // Tokenları yakalama ve saklama
        const jwtToken = response.token;
        const refreshToken = response.refreshToken;
        console.log('Refreshed successful');

        this.tokenService.setJwtToken(jwtToken);
        this.tokenService.setRefreshToken(refreshToken);

        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = error.error.message || 'Refreshed failed';
      },
    });
  }
}
