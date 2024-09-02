import { Component } from '@angular/core';
import { authServiceService } from '../services/auth-service.service';
import { TokenServiceService } from '../services/token-service.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  errorMessage: string = '';

  constructor(
    private authService: authServiceService,
    private tokenService: TokenServiceService,
    private router: Router
  ) {}

  logout() {
    const logout = {
      RefreshToken: this.tokenService.getRefreshToken(),
    };

    this.authService.logout(logout).subscribe({
      next: () => {
        // Logout işlemi başarılı olursa ana sayfaya yönlendir
        this.router.navigate(['/login']);


        //BU ALTTAKİ SİLİNECEK
        this.authService.setLoggedIn(false);

      },
    });
    this.tokenService.clearJwtToken();
    this.tokenService.clearRefreshToken();
  }
}
